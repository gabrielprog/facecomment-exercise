import React, {Component} from 'react';

import PostBox from './PostBox';
import avatar from '../assets/avatar.png';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                  id: 1,
                  author: {
                    name: "Julio Matheus",
                    avatar: avatar
                  },
                  date: "04 Jun 2019",
                  content: "Pessoal, alguém sabe se a Samsung está contratando?",
                  comments: [
                    {
                      id: 1,
                      author: {
                        name: "Diego Fernandes",
                        avatar: avatar
                      },
                      content: "Não sei"
                    }
                  ]
                },
                {
                    id: 2,
                    author: {
                      name: "Gabriel Alcantara",
                      avatar: avatar
                    },
                    date: "07 Jun 2019",
                    content: "Quanto tá o arroz?",
                    comments: [
                      {
                        id: 2,
                        author: {
                          name: "Julianho silvame",
                          avatar: avatar
                        },
                        content: "Troco em uma rtx"
                      }
                    ]
                  }
              ]
        };
    }

    render(){
        return (
            <div className='main'>
                {this.state.posts.map(post =>
                    <PostBox 
                    key={post.id}
                    postUserAvatar={post.author.avatar}
                    postUserName={post.author.name}
                    postDatePosting={post.date}
                    postMessage={post.content}
                    commentUsername={post.comments.map(name => name.author.name)}
                    commentAvatar={post.comments.map(name => name.author.avatar)}
                    commentMessage={post.comments.map(name => name.content)}
                     />
                    )}
                
            </div>
        );
    }
}

export default Main;