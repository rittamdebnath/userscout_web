import React from 'react';

const Vote = props => {
  const { votes } = props;
  return (
    <div className="border rounded px-3 py-2">
      <div className="d-flex justify-content-center">
        <i className="fas fa-arrow-up text-primary" />
      </div>
      <div className="mt-2">
        {votes}
      </div>
    </div>
  )
}

export default Vote;