import React, { Component } from 'react';
import '../styles/main.css';

class CreatePost extends Component {
    render() {
        return (
            <div className='col-sm-4'>
                <div className="p-4 bg-f5 rounded">
                    <h5 className="text-center">Create a Post</h5>
                    <div className="border bg-white px-4 py-3 my-4 rounded text-left">
                        <h6 className="text-uppercase title-1 mt-1">Title</h6>
                        <input 
                            type="text" 
                            className="w-100 border-0" 
                            placeholder="Short description title" />
                    </div>
                    <div className="border bg-white px-4 py-3 my-4 rounded text-left">
                        <h6 className="text-uppercase title-1 mt-1">Details</h6>
                        <textarea 
                            className="w-100 border-0"
                            placeholder="Any additional details">
                        </textarea>
                    </div>
                    <div className="btn-container">
                        <span className="px-4 py-3 border rounded bg-white"></span>
                        <button 
                            className="btn btn-primary btn-create text-uppercase fs-9">
                            Create Post
                        </button>
                    </div>
                </div>
                <p className="text-center tc-a mt-3 fs-9">Powered by Userscout</p>
            </div>
        );
    }
}

export default CreatePost;
