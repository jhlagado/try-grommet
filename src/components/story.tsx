import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Comment } from './comment';
import { StoryItem, Stylable, CommentItem } from '../types';
import { getCommentItem } from '../apis';
import { formatDate } from '../utils';

interface StoryProps extends Stylable {
  item: StoryItem;
}

const BaseStory = ({ item, className }: StoryProps) => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (showComments && comments.length === 0) {
      setLoading(true);
      const promises = item.kids.slice(0, 20).map(id => getCommentItem(id));
      Promise.all(promises).then(items => {
        const comments = items.filter(item => !!item) as CommentItem[];
        if (!items) return;
        setLoading(false);
        if (!mounted || !item) return;
        setComments(comments);
      });
    }
    return () => {
      mounted = false;
    };
  }, [item, showComments]);

  const handleClick = () => {
    setShowComments(!showComments);
  };

  return item && item.type === 'story' ? (
    <div className={`${className} story`}>
      <h2 className="story-heading content-subhead">
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </h2>
      <div className="story-footer">
        {item.score} points by <span data-testid="id-by">{item.by}</span>{' '}
        {formatDate(item.time)}{' '}
        <button
          className="pure-button pure-button-primary"
          onClick={handleClick}
        >
          {loading ? 'Loading...' : `${item.kids?.length} comments`}
        </button>
      </div>
      <div className="comment-list">
        {showComments &&
          comments?.map(comment => <Comment key={comment.id} item={comment} />)}
      </div>
    </div>
  ) : null;
};

export const Story = styled(BaseStory)`
  button {
    margin: 0.5rem;
    font-size: 75%;
    position: relative;
    top: -3px;
  }
`;
