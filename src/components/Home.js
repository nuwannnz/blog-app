import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="wrap-frame">
                    <h1>Hi, I'm Anjana.</h1>
                    <div className="cover-btn">
                        <Link to="/posts">
                            <Button variant="outlined">My Posts</Button>
                        </Link>
                    </div>
                </div>


            </header>
        </div>
    );
}

export default Home;
