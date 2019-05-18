import React from 'react';

export default (props) => {
    const {title, speakers, video_url, type} = props;

    return (
        <div className="card bg-success">
            <div className="card-body">
                <p className="card-text">
                    {title}<br />
                    <small>{type}</small><br />
                    {speakers.join(',')}
                </p>
                <a href={video_url} className="btn btn-primary">View on YouTube</a>
            </div>
        </div>
    );
}