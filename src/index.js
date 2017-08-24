import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2jhHSjUbH6uU7aTMa7pkUOVy23Ihc3H8';




// create a new component
// this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // it calls render function again upon completion
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);

    return (
      <div>
        <SearchBar
          onSearchTermChange={(term) => videoSearch(term)}
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    ); // a taste of JSX
  }
}


// take this component'a generated HTML
// and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2jhHSjUbH6uU7aTMa7pkUOVy23Ihc3H8';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
*/
