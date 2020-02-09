import React from 'react';
import './PostPage.css';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loadPostsAsync } from '../actions/post.actions';
import moment from 'moment';

class PostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      currentPostId: -1,
      currentPost: null
    }
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    console.log('component mounted', this.props);
    this.setState({
      currentPostId: postId
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPost: nextProps.posts.find(p => p.postId === this.state.currentPostId)
    });
  }

  getCurrentPost() {
    return (
      <div>

        <div className="PostPage-header">
          <h1 >{this.state.currentPost.title}</h1>
          <div className="info">
            <span>Username</span>
            <span className="dot" ><i style={{ fontSize: '10px' }} className="fas fa-circle"></i></span>
            <span title={moment(this.state.currentPost.created_on).format("DD/MM/YYYY")}>{moment(this.state.currentPost.created_on).format("MMM d")}</span>
          </div>
        </div>
        <div className="post-wrap">
          <p style={{ textAlign: 'left' }}>{this.state.currentPost.content}</p>
        </div>
      </div>

    );
  }
  render() {

    return (
      <div className="PostPage">

        {this.state.currentPost !== null ? this.getCurrentPost() : <p>Loading</p>}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.postList
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: dispatch(loadPostsAsync())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage));