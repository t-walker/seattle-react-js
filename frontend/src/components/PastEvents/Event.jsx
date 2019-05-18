import React from 'react';

import Talk from './Talk';

export default (props) => {
    const {host, date, talks} = props;

    return (
        <div style={{marginBottom: '30px'}}>
            <div className="row">
                <div className="col-md-12">
                    <h2>{host} <small>{date}</small></h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card-deck">
                        {talks.map((talk) => <Talk {...talk} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}