import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUserAsync } from '../actions/user.actions';
import { Spinner } from './Spinner';



class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName
        };
        console.log('props', props);
    }

    componentWillMount() {
        this.props.fetchData();
    }

    componentWillReceiveProps(nextProps) {
        console.log('received next props', nextProps);
        this.setState({
            userName: nextProps.userName
        })
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div className="wrap-frame">

                        {this.state.userName !== null ?

                            (<div>

                                <h1>Hi, I'm {this.state.userName}</h1>
                                <div className="cover-btn">
                                    <Link to="/posts">
                                        <Button variant="outlined">My Posts</Button>
                                    </Link>
                                </div>
                            </div>
                            ) : null
                        }

                        {this.state.userName === null ?
                            (<div>
                                <Spinner />
                            </div>) : null
                        }
                    </div>


                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.user.user === null ? null : state.user.user.fName
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(loadUserAsync())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
