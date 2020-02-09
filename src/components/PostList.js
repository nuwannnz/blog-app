import React from 'react';
import { connect } from "react-redux";
import './PostList.css';
import { loadPostsAsync } from '../actions/post.actions';
import { Link } from 'react-router-dom';
import moment from "moment";


class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchData();
        this.state = {
            posts: props.posts
        }

    }
    componentWillMount() {
        this.props.fetchData();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            posts: nextProps.posts
        })
    }

    render() {

        return (
            <div className="Items">
                <header className="Items-header">
                    <div className="wrap-frame">
                        <h1>My Weekly Posts</h1>
                    </div>


                    <div className="card-wrap">

                        {this.state.posts.map(post => (

                            <Link to={`/post/${post.postId}`}>
                                <div className="card item" key={post.postId}>
                                    <div className="color-bar"></div>
                                    <div className="container">
                                        <h2 className="title"><b>{post.title}</b></h2>
                                        <p className="date" style={{ marginTop: '0px' }}>{moment(post.created_on).format('DD/MM/YYYY')}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </header>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.postList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => {
        dispatch(loadPostsAsync())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);