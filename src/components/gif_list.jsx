import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = (props) => {
    return this.props.gifs.map(gif => <Gif id={gif.id} selectGif={this.props.selectGif} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
