import React, {Component} from 'react';

class PostBox extends Component {
    render(){
        return (
            <div className='postbox'>
                <div className="box-profile">
                    <div className="profile">
                        <img src={this.props.postUserAvatar} style={{
                            width: 25,
                        }} alt={this.props.postUserName}/>
                        <span>{this.props.postUserName}</span>
                        <span>{this.props.postDatePosting}</span>
                    </div>
                </div>

                <hr/>

                <div className="box-post">
                    <span>{this.props.postMessage}</span>
                </div>

                <hr/>

                <div className="box-comment">
                    <img src={this.props.commentAvatar} style={{
                            width: 25,
                            height: 25
                        }} alt={this.props.commentUsername}/>
                    <div className="comment">
                        <span>{this.props.commentMessage}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostBox;