import React,{ Component } from "react";
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';


class posts extends Component {
     state ={
        posts : []
    }

    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post , author : 'Max'
                    }
                })
                this.setState({
                    posts : updatedPost
                })
                })
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
       
    }
    render(){
        let posts = this.state.posts.map(post => {
            return (
                <Link to={this.props.match.url + '/' +post.id} key={post.id} >
                <Post title={post.title} 
                        key={post.id}
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}/>
                        </Link>
            )
        })
        return(
            <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default posts;