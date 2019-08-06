import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      likes: 100,
      dislikes: 25
     };
  }

  handleLike(act){
    if (act === 'like'){
      switch (this.state.liked) {
        case 0:
          this.setState({liked:1});
          this.setState({likes: this.state.likes+1});
        break;
        case 1:
          this.setState({liked:0});
          this.setState({likes: this.state.likes-1});
        break;
        case 2:
          this.setState({liked:1});
          this.setState({likes: this.state.likes+1});
          this.setState({dislikes: this.state.dislikes-1});
        break;
      }
    }
    if (act === 'dislike'){
      switch (this.state.liked) {
        case 0:
          this.setState({liked:2});
          this.setState({dislikes: this.state.dislikes+1});
        break;
        case 1:
          this.setState({liked:2});
          this.setState({dislikes: this.state.dislikes+1});
          this.setState({likes: this.state.likes-1});
        break;
        case 2:
          this.setState({liked:0});
          this.setState({dislikes: this.state.dislikes-1});
        break;
      }
    }
  }

  render() {
    let liked = "like-button";
    let disliked = "dislike-button";
    if (this.state.liked === 1){
      liked = "like-button liked"
    }
    if (this.state.liked === 2){
      disliked = "dislike-button disliked";
    }
    return (
      <div>
        <button type="button" className={liked} onClick={() => handleLike('like')}>
         Like | <span className="like-count">{this.state.likes}</span>
        </button>
        <button type="button" className={disliked} onClick={() => handleLike('dislike')}>
         Dislike | <span className="dislike-count">{this.state.dislikes}</span>
         </button>
      </div>
    );
  }
}

export default LikeButton;
