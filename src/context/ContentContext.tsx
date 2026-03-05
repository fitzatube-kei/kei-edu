'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Types
export interface Comment {
  id: string;
  contentId: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  likedBy: string[];
}

export interface Content {
  id: string;
  type: 'kpop' | 'kdrama';
  title: string;
  content: string[] | ScriptLine[];
  authorId: string;
  authorName: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
  isPublic: boolean;
}

export interface ScriptLine {
  character: {
    id: string;
    name: string;
    nameEn: string;
    emoji: string;
    gender?: 'male' | 'female' | 'child';
  };
  dialogue: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  subscription: 'free' | 'premium';
  createdAt: string;
}

interface ContentContextType {
  contents: Content[];
  currentUserId: string;
  currentUserName: string;
  currentUserEmail: string;
  currentUserSubscription: 'free' | 'premium';
  addContent: (content: Omit<Content, 'id' | 'createdAt' | 'likes' | 'likedBy' | 'comments' | 'authorId' | 'authorName'>) => Content;
  deleteContent: (id: string) => boolean;
  getContentById: (id: string) => Content | undefined;
  getMyContents: () => Content[];
  getPublicContents: () => Content[];
  getUserPublicContents: (userId: string) => Content[];
  updateContentVisibility: (id: string, isPublic: boolean) => boolean;
  addComment: (contentId: string, text: string) => Comment | undefined;
  updateComment: (contentId: string, commentId: string, text: string) => boolean;
  deleteComment: (contentId: string, commentId: string) => boolean;
  toggleCommentLike: (contentId: string, commentId: string) => boolean;
  toggleContentLike: (contentId: string) => boolean;
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Generate unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Generate user ID (stored in localStorage)
const getUserId = () => {
  if (typeof window === 'undefined') return 'guest';
  let userId = localStorage.getItem('kei-user-id');
  if (!userId) {
    userId = 'user_' + generateId();
    localStorage.setItem('kei-user-id', userId);
  }
  return userId;
};

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [contents, setContents] = useState<Content[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>('guest');
  const [currentUserName, setCurrentUserName] = useState<string>('');
  const [currentUserEmail, setCurrentUserEmail] = useState<string>('');
  const [currentUserSubscription, setCurrentUserSubscription] = useState<'free' | 'premium'>('free');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const storedContents = localStorage.getItem('kei-contents');
    const storedUserName = localStorage.getItem('kei-user-name');
    const storedUserEmail = localStorage.getItem('kei-user-email');
    const storedSubscription = localStorage.getItem('kei-user-subscription');

    if (storedContents) {
      try {
        setContents(JSON.parse(storedContents));
      } catch (e) {
        console.error('Failed to parse stored contents', e);
      }
    }

    setCurrentUserId(getUserId());
    setCurrentUserName(storedUserName || 'Anonymous');
    setCurrentUserEmail(storedUserEmail || '');
    setCurrentUserSubscription((storedSubscription as 'free' | 'premium') || 'free');
    setIsInitialized(true);
  }, []);

  // Save to localStorage when contents change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('kei-contents', JSON.stringify(contents));
    }
  }, [contents, isInitialized]);

  const setUserName = useCallback((name: string) => {
    setCurrentUserName(name);
    localStorage.setItem('kei-user-name', name);
  }, []);

  const setUserEmail = useCallback((email: string) => {
    setCurrentUserEmail(email);
    localStorage.setItem('kei-user-email', email);
  }, []);

  const addContent = useCallback((content: Omit<Content, 'id' | 'createdAt' | 'likes' | 'likedBy' | 'comments' | 'authorId' | 'authorName'>) => {
    const newContent: Content = {
      ...content,
      id: generateId(),
      authorId: currentUserId,
      authorName: currentUserName || 'Anonymous',
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
      comments: [],
    };
    setContents(prev => [newContent, ...prev]);
    return newContent;
  }, [currentUserId, currentUserName]);

  const deleteContent = useCallback((id: string) => {
    const content = contents.find(c => c.id === id);
    if (!content || content.authorId !== currentUserId) return false;
    setContents(prev => prev.filter(c => c.id !== id));
    return true;
  }, [contents, currentUserId]);

  const getContentById = useCallback((id: string) => {
    return contents.find(c => c.id === id);
  }, [contents]);

  const getMyContents = useCallback(() => {
    return contents.filter(c => c.authorId === currentUserId);
  }, [contents, currentUserId]);

  const getPublicContents = useCallback(() => {
    return contents.filter(c => c.isPublic);
  }, [contents]);

  const getUserPublicContents = useCallback((userId: string) => {
    return contents.filter(c => c.authorId === userId && c.isPublic);
  }, [contents]);

  const updateContentVisibility = useCallback((id: string, isPublic: boolean) => {
    const content = contents.find(c => c.id === id);
    if (!content || content.authorId !== currentUserId) return false;
    setContents(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, isPublic };
      }
      return c;
    }));
    return true;
  }, [contents, currentUserId]);

  const addComment = useCallback((contentId: string, text: string) => {
    const newComment: Comment = {
      id: generateId(),
      contentId,
      authorId: currentUserId,
      authorName: currentUserName || 'Anonymous',
      text,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
    };

    setContents(prev => prev.map(content => {
      if (content.id === contentId) {
        return { ...content, comments: [...content.comments, newComment] };
      }
      return content;
    }));

    return newComment;
  }, [currentUserId, currentUserName]);

  const updateComment = useCallback((contentId: string, commentId: string, text: string) => {
    let updated = false;
    setContents(prev => prev.map(content => {
      if (content.id === contentId) {
        return {
          ...content,
          comments: content.comments.map(comment => {
            if (comment.id === commentId && comment.authorId === currentUserId) {
              updated = true;
              return { ...comment, text, updatedAt: new Date().toISOString() };
            }
            return comment;
          }),
        };
      }
      return content;
    }));
    return updated;
  }, [currentUserId]);

  const deleteComment = useCallback((contentId: string, commentId: string) => {
    let deleted = false;
    setContents(prev => prev.map(content => {
      if (content.id === contentId) {
        const comment = content.comments.find(c => c.id === commentId);
        if (comment && comment.authorId === currentUserId) {
          deleted = true;
          return {
            ...content,
            comments: content.comments.filter(c => c.id !== commentId),
          };
        }
      }
      return content;
    }));
    return deleted;
  }, [currentUserId]);

  const toggleCommentLike = useCallback((contentId: string, commentId: string) => {
    setContents(prev => prev.map(content => {
      if (content.id === contentId) {
        return {
          ...content,
          comments: content.comments.map(comment => {
            if (comment.id === commentId) {
              const hasLiked = comment.likedBy.includes(currentUserId);
              return {
                ...comment,
                likes: hasLiked ? comment.likes - 1 : comment.likes + 1,
                likedBy: hasLiked
                  ? comment.likedBy.filter(id => id !== currentUserId)
                  : [...comment.likedBy, currentUserId],
              };
            }
            return comment;
          }),
        };
      }
      return content;
    }));
    return true;
  }, [currentUserId]);

  const toggleContentLike = useCallback((contentId: string) => {
    setContents(prev => prev.map(content => {
      if (content.id === contentId) {
        const hasLiked = content.likedBy.includes(currentUserId);
        return {
          ...content,
          likes: hasLiked ? content.likes - 1 : content.likes + 1,
          likedBy: hasLiked
            ? content.likedBy.filter(id => id !== currentUserId)
            : [...content.likedBy, currentUserId],
        };
      }
      return content;
    }));
    return true;
  }, [currentUserId]);

  if (!isInitialized) {
    return null;
  }

  return (
    <ContentContext.Provider
      value={{
        contents,
        currentUserId,
        currentUserName,
        currentUserEmail,
        currentUserSubscription,
        addContent,
        deleteContent,
        getContentById,
        getMyContents,
        getPublicContents,
        getUserPublicContents,
        updateContentVisibility,
        addComment,
        updateComment,
        deleteComment,
        toggleCommentLike,
        toggleContentLike,
        setUserName,
        setUserEmail,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
