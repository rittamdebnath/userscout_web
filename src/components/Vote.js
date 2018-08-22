import React, { Component } from 'react';

class Vote extends Component {
    render() {
        return (
            <div className="border rounded px-3 py-2">
                <i className="fas fa-arrow-up text-primary" />
                <div>
                    20
                </div>
            </div>
        )
    }
}

export default Vote;