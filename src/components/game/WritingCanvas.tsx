'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { getCharacterStrokes, StrokePath, StrokePoint } from '@/data/hangul/strokes';

interface WritingCanvasProps {
  character: string;
  onComplete: () => void;
  size?: number;
}

// Calculate distance from a point to a line segment
function distToSegment(px: number, py: number, ax: number, ay: number, bx: number, by: number): number {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.sqrt((px - ax) ** 2 + (py - ay) ** 2);
  let t = ((px - ax) * dx + (py - ay) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const projX = ax + t * dx;
  const projY = ay + t * dy;
  return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
}

// Calculate cumulative length along a polyline path
function getPathLengths(path: StrokePoint[], scale: number): number[] {
  const lengths = [0];
  for (let i = 1; i < path.length; i++) {
    const dx = (path[i][0] - path[i - 1][0]) * scale;
    const dy = (path[i][1] - path[i - 1][1]) * scale;
    lengths.push(lengths[i - 1] + Math.sqrt(dx * dx + dy * dy));
  }
  return lengths;
}

// Project a point onto a polyline path and return progress (0-1)
function projectOntoPath(px: number, py: number, path: StrokePoint[], scale: number): number {
  const lengths = getPathLengths(path, scale);
  const totalLen = lengths[lengths.length - 1];
  if (totalLen === 0) return 0;

  let bestDist = Infinity;
  let bestProgress = 0;

  for (let i = 0; i < path.length - 1; i++) {
    const ax = path[i][0] * scale, ay = path[i][1] * scale;
    const bx = path[i + 1][0] * scale, by = path[i + 1][1] * scale;
    const dx = bx - ax, dy = by - ay;
    const segLen = Math.sqrt(dx * dx + dy * dy);
    if (segLen === 0) continue;

    let t = ((px - ax) * dx + (py - ay) * dy) / (segLen * segLen);
    t = Math.max(0, Math.min(1, t));

    const projX = ax + t * dx;
    const projY = ay + t * dy;
    const dist = Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);

    if (dist < bestDist) {
      bestDist = dist;
      bestProgress = (lengths[i] + t * (lengths[i + 1] - lengths[i])) / totalLen;
    }
  }

  return bestProgress;
}

// Get a point along a path at a given progress (0-1)
function getPointAtProgress(path: StrokePoint[], progress: number, scale: number): [number, number] {
  const lengths = getPathLengths(path, scale);
  const totalLen = lengths[lengths.length - 1];
  const targetLen = progress * totalLen;

  for (let i = 0; i < lengths.length - 1; i++) {
    if (targetLen >= lengths[i] && targetLen <= lengths[i + 1]) {
      const segProgress = lengths[i + 1] === lengths[i] ? 0 : (targetLen - lengths[i]) / (lengths[i + 1] - lengths[i]);
      return [
        path[i][0] * scale + (path[i + 1][0] - path[i][0]) * scale * segProgress,
        path[i][1] * scale + (path[i + 1][1] - path[i][1]) * scale * segProgress,
      ];
    }
  }
  const last = path[path.length - 1];
  return [last[0] * scale, last[1] * scale];
}

// Draw an arrowhead at a position with a given angle
function drawArrow(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size * 0.5);
  ctx.lineTo(-size, size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function WritingCanvas({ character, onComplete, size = 280 }: WritingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [strokes, setStrokes] = useState<StrokePath[]>([]);
  const [currentStroke, setCurrentStroke] = useState(0);
  const [strokeProgress, setStrokeProgress] = useState(0); // 0-1 how far along current stroke
  const [completedStrokes, setCompletedStrokes] = useState<number[]>([]);
  const [allDone, setAllDone] = useState(false);
  const isDrawing = useRef(false);
  const maxProgress = useRef(0); // Track max progress to prevent going backward

  // Initialize strokes when character changes
  useEffect(() => {
    const s = getCharacterStrokes(character);
    setStrokes(s);
    setCurrentStroke(0);
    setStrokeProgress(0);
    setCompletedStrokes([]);
    setAllDone(false);
    maxProgress.current = 0;
  }, [character]);

  // Render canvas
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);

    // Background
    ctx.fillStyle = '#FAFAFA';
    ctx.fillRect(0, 0, size, size);

    // Grid lines
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    if (strokes.length === 0) return;

    // Draw each stroke
    strokes.forEach((stroke, idx) => {
      const isCompleted = completedStrokes.includes(idx);
      const isCurrent = idx === currentStroke && !allDone;
      const isPending = !isCompleted && !isCurrent;

      if (isCompleted) {
        // Completed stroke: solid dark purple
        ctx.strokeStyle = '#440687';
        ctx.lineWidth = Math.max(4, size * 0.022);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        stroke.forEach(([x, y], i) => {
          if (i === 0) ctx.moveTo(x * size, y * size);
          else ctx.lineTo(x * size, y * size);
        });
        ctx.stroke();
      } else if (isCurrent) {
        // Current stroke guide: light dashed line
        ctx.strokeStyle = 'rgba(68, 6, 135, 0.2)';
        ctx.lineWidth = Math.max(4, size * 0.022);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        stroke.forEach(([x, y], i) => {
          if (i === 0) ctx.moveTo(x * size, y * size);
          else ctx.lineTo(x * size, y * size);
        });
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw traced portion (solid)
        if (strokeProgress > 0) {
          ctx.strokeStyle = '#440687';
          ctx.lineWidth = Math.max(4, size * 0.022);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.beginPath();

          const lengths = getPathLengths(stroke, size);
          const totalLen = lengths[lengths.length - 1];
          const targetLen = strokeProgress * totalLen;

          ctx.moveTo(stroke[0][0] * size, stroke[0][1] * size);

          for (let i = 1; i < stroke.length; i++) {
            if (lengths[i] <= targetLen) {
              ctx.lineTo(stroke[i][0] * size, stroke[i][1] * size);
            } else {
              const segProgress = (targetLen - lengths[i - 1]) / (lengths[i] - lengths[i - 1]);
              const x = stroke[i - 1][0] + (stroke[i][0] - stroke[i - 1][0]) * segProgress;
              const y = stroke[i - 1][1] + (stroke[i][1] - stroke[i - 1][1]) * segProgress;
              ctx.lineTo(x * size, y * size);
              break;
            }
          }
          ctx.stroke();
        }

        // Start point indicator (green pulsing circle)
        const startX = stroke[0][0] * size;
        const startY = stroke[0][1] * size;
        if (strokeProgress < 0.05) {
          ctx.fillStyle = '#22C55E';
          ctx.beginPath();
          ctx.arc(startX, startY, Math.max(8, size * 0.035), 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(startX, startY, Math.max(4, size * 0.018), 0, Math.PI * 2);
          ctx.fill();
        }

        // Arrow showing direction (at ~40% along the stroke)
        const arrowProgress = Math.min(0.4, Math.max(0.2, strokeProgress + 0.15));
        const [arrowX, arrowY] = getPointAtProgress(stroke, arrowProgress, size);
        const [arrowX2, arrowY2] = getPointAtProgress(stroke, Math.min(1, arrowProgress + 0.05), size);
        const angle = Math.atan2(arrowY2 - arrowY, arrowX2 - arrowX);

        ctx.fillStyle = 'rgba(68, 6, 135, 0.4)';
        drawArrow(ctx, arrowX, arrowY, angle, Math.max(8, size * 0.035));

        // Stroke number
        const numX = startX + (startX < size * 0.3 ? -14 : startX > size * 0.7 ? 14 : 0);
        const numY = startY + (startY < size * 0.3 ? -14 : 14);
        ctx.fillStyle = '#440687';
        ctx.font = `bold ${Math.max(11, size * 0.045)}px Poppins, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${idx + 1}`, numX, numY);
      } else if (isPending) {
        // Pending strokes: very light guide
        ctx.strokeStyle = 'rgba(68, 6, 135, 0.08)';
        ctx.lineWidth = Math.max(3, size * 0.015);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        stroke.forEach(([x, y], i) => {
          if (i === 0) ctx.moveTo(x * size, y * size);
          else ctx.lineTo(x * size, y * size);
        });
        ctx.stroke();
        ctx.setLineDash([]);

        // Stroke number (faded)
        const sX = stroke[0][0] * size;
        const sY = stroke[0][1] * size;
        const nX = sX + (sX < size * 0.3 ? -14 : sX > size * 0.7 ? 14 : 0);
        const nY = sY + (sY < size * 0.3 ? -14 : 14);
        ctx.fillStyle = 'rgba(68, 6, 135, 0.15)';
        ctx.font = `bold ${Math.max(10, size * 0.04)}px Poppins, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${idx + 1}`, nX, nY);
      }
    });

    // Completion checkmark
    if (allDone) {
      ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
      ctx.fillRect(0, 0, size, size);
    }
  }, [strokes, currentStroke, strokeProgress, completedStrokes, allDone, size]);

  useEffect(() => {
    render();
  }, [render]);

  const getPos = useCallback((e: React.MouseEvent | React.TouchEvent): [number, number] | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const scaleX = size / rect.width;
    const scaleY = size / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      if (!touch) return null;
      return [(touch.clientX - rect.left) * scaleX, (touch.clientY - rect.top) * scaleY];
    }
    return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
  }, [size]);

  const PROXIMITY_THRESHOLD = size * 0.15; // How close user needs to be to stroke path

  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (allDone || currentStroke >= strokes.length) return;
    e.preventDefault();

    const pos = getPos(e);
    if (!pos) return;

    const stroke = strokes[currentStroke];
    const startX = stroke[0][0] * size;
    const startY = stroke[0][1] * size;
    const dist = Math.sqrt((pos[0] - startX) ** 2 + (pos[1] - startY) ** 2);

    // Must start near the stroke's start point
    if (dist < PROXIMITY_THRESHOLD * 1.5) {
      isDrawing.current = true;
      maxProgress.current = 0;
      setStrokeProgress(0);
    }
  }, [allDone, currentStroke, strokes, size, getPos, PROXIMITY_THRESHOLD]);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current || allDone || currentStroke >= strokes.length) return;
    e.preventDefault();

    const pos = getPos(e);
    if (!pos) return;

    const stroke = strokes[currentStroke];

    // Check proximity to stroke path
    let minDist = Infinity;
    for (let i = 0; i < stroke.length - 1; i++) {
      const d = distToSegment(
        pos[0], pos[1],
        stroke[i][0] * size, stroke[i][1] * size,
        stroke[i + 1][0] * size, stroke[i + 1][1] * size
      );
      minDist = Math.min(minDist, d);
    }

    // If too far from stroke, don't update progress (user is off-path)
    if (minDist > PROXIMITY_THRESHOLD) return;

    // Project onto path and update progress
    const progress = projectOntoPath(pos[0], pos[1], stroke, size);

    // Only allow forward progress (prevent going backward)
    if (progress > maxProgress.current) {
      maxProgress.current = progress;
      setStrokeProgress(progress);

      // Check if stroke is complete (reached ~80% of the way)
      if (progress >= 0.78) {
        isDrawing.current = false;
        const newCompleted = [...completedStrokes, currentStroke];
        setCompletedStrokes(newCompleted);
        setStrokeProgress(0);
        maxProgress.current = 0;

        if (currentStroke + 1 >= strokes.length) {
          // All strokes done
          setAllDone(true);
          setTimeout(() => onComplete(), 500);
        } else {
          setCurrentStroke(currentStroke + 1);
        }
      }
    }
  }, [allDone, currentStroke, strokes, size, getPos, completedStrokes, onComplete, PROXIMITY_THRESHOLD]);

  const handleEnd = useCallback(() => {
    isDrawing.current = false;
    // If stroke wasn't completed, reset progress
    if (!completedStrokes.includes(currentStroke)) {
      setStrokeProgress(0);
      maxProgress.current = 0;
    }
  }, [completedStrokes, currentStroke]);

  const clearCanvas = useCallback(() => {
    setCurrentStroke(0);
    setStrokeProgress(0);
    setCompletedStrokes([]);
    setAllDone(false);
    maxProgress.current = 0;
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-2xl overflow-hidden border-2"
        style={{
          width: size,
          height: size,
          maxWidth: '100%',
          aspectRatio: '1/1',
          borderColor: allDone ? '#22C55E' : '#E5E7EB',
        }}
      >
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="block"
          style={{ width: '100%', height: '100%', touchAction: 'none', cursor: 'crosshair' }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
        {allDone && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Stroke counter */}
      {strokes.length > 0 && !allDone && (
        <div className="flex items-center gap-2">
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Stroke {Math.min(currentStroke + 1, strokes.length)}/{strokes.length}
          </span>
        </div>
      )}

      {!allDone && (
        <button
          onClick={clearCanvas}
          className="px-5 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Clear
        </button>
      )}
    </div>
  );
}
