import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyCpdDBzgC6QWYmdjPUJNvOzQpzrwruW-D8';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('React Tutorials');
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(data)=>{
      this.setState({
        videos:data
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm=>this.videoSearch(searchTerm)}/>
        <VideoList videos={this.state.videos}/>
        <VideoList
           onVideoSelect={userSelected=>this.setState({selectedVideo:userSelected})}
           videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
