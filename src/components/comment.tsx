import * as React from 'react';

import { CommentItem, Stylable } from '../types';
import styled from 'styled-components';
import { formatDate } from '../utils';

interface CommentProps extends Stylable {
  item: CommentItem;
}

const BaseComment = ({ item, className }: CommentProps) => {
  return item.type === 'comment' ? (
    <div className={`${className} comment`} data-testid="id-comment">
      <div>
        {item && <div dangerouslySetInnerHTML={{ __html: item.text }} />}
      </div>
      <div className="comment-footer">
        by <span data-testid="id-by">{item.by}</span> {formatDate(item.time)}
      </div>
    </div>
  ) : null;
};

export const Comment = styled(BaseComment)`
  font-size: 0.875rem;
  padding: 0.5rem;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  .comment-footer {
    font-size: 0.75rem;
  }
`;
