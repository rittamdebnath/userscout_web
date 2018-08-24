import React, { Component } from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';

class Post extends Component {
  render() {
    return (
      <div className="row no-gutters">
        <CreatePost />
        <div className='col no-gutters'>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    );
  }
}

export default Post;
