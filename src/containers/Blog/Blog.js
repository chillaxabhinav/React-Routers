import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from '../../containers/Blog/NewPost/NewPost';


class Blog extends Component {

    state ={
        auth : false
    }
    render () {
        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/posts">Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname :  '/new-post',
                            hash : '#submit',
                            search : '?quick-submit=true'
                        }}>
                        New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} />*/}
        <Switch>
            {/* Below is the guard */}
            {/* this.state.auth ? <Route path="/new-post" component={NewPost} /> : null */}
            <Route path="/new-post" component={NewPost} />
            <Route path="/posts" component={Posts} />
            <Redirect from='/' to='/posts' />
        </Switch>
        </div>
        );
    }
}

export default Blog;