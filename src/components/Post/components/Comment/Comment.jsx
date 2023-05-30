import React from 'react';

const Comment = ({ props }) => {
  return (
    <div className='comment' 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#c7c7c7',
        borderRadius: '0.5rem',
        }}>
      <p>{props.email}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Comment;
