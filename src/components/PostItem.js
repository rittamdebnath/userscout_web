import React from 'react';
import Vote from './Vote';
import Status from './Status';

const Post = props => {
  const { title, description, votes, commentsCount } = props;
  return (
    <div className='col row no-gutters'>
      <div className='px-3 pt-4'>
        <Vote votes={votes} />
      </div>
      <div className='col py-4'>
        <p className='font-weight-bold'>{title}</p>
        <Status name='Planned' />
        <p className='mt-3 tc-8'>{description}</p>
        <div className='tc-a'>
          <span className='mr-2'><i className='fas fa-comment-alt mr-1' /> {commentsCount} Comments </span>
          <span className='ml-2'><i className='fas fa-flag mr-1' /> Report </span>
        </div>
      </div>
    </div>
  );
}

export default Post;