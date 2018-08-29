import React, { Component } from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';

class Post extends Component {

  state = {
    posts: [
      {
        title: "Increase the productivity of the app. And realiblity is also important",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        votes: 20,
        commentsCount: 2,
      },
      {
        title: "Increase the productivity of the app. And realiblity is also important",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        votes: 22,
        commentsCount: 4,
      },
      {
        title: "Increase the productivity of the app. And realiblity is also important",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        votes: 42,
        commentsCount: 2,
      },
      {
        title: "Increase the productivity of the app. And realiblity is also important",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
        votes: 12,
        commentsCount: 2,
      }
    ]
  }

  renderPosts = () => {
    const { posts } = this.state;
    return posts.map((post, index) => {
      const {title, description, votes, commentsCount} = post;
      return (
        <PostItem 
          key={''+index} 
          title={title} 
          description={description} 
          votes={votes} 
          commentsCount={commentsCount} />
      )
    });
  }

  render() {    
    return (
      <div className="row no-gutters">
        <CreatePost />
        <div className='col no-gutters'>
          { this.renderPosts() }
        </div>
      </div>
    );
  }
}

export default Post;
