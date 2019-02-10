import React from 'react';

import {
    Container,
    Jumbotron
} from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Container>
                <Jumbotron fluid>
                    <h1 className="display-1 text-center">Seattle React.js</h1>
                </Jumbotron>
            </Container>
        </div>
    );
};

export default Header;