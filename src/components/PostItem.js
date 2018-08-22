import React, { Component } from 'react';
import Vote from './Vote';
import Status from './Status';

class Post extends Component {
    render() {
        return (
            <div className='col row no-gutters'>
                <div className='px-3 pt-4'>
                    <Vote />
                </div>
                <div className='col py-4'>
                    <p className='font-weight-bold'>Increase the productivity of the app. And realiblity is also important</p>
                    <Status name='Planned' />
                    <p className='mt-3 tc-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    <div className='tc-a'>
                        <span className='mr-2'><i className='fas fa-comment-alt mr-1'/> 2 Comments </span>
                        <span className='ml-2'><i className='fas fa-flag mr-1'/> Report </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;