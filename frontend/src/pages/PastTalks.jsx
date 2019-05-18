import React from 'react';

import events from '../data/events';

import Event from '../components/PastEvents/Event';

export default () => {
    const header = (
        <div className="row">
            <div className="col-md-12">
                <h1>Past Talks</h1>
            </div>
        </div>
    );

    const eventsContainer = events.map((event) => (<Event {...event} />));

    return (
        <div>
            {header}
            {eventsContainer}
        </div>
    );
}