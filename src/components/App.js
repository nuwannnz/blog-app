import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import PostList from './PostList';
import PostPage from './PostPage';


function App() {
  return (
    <Router>

      <div >
        <Switch>
          <Route path={`/post/:postId`} >
            <PostPage />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
