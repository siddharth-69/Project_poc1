import React,{Component} from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar'
import axios from 'axios'
import './App.css';
import ImageDisplay from './components/ImageDisplay';


class App extends Component {

  state={
    Movies: []
  }

  handleSubmit = async (searchTerm) =>{
    const response= await axios.get('http://www.omdbapi.com/?apiKey=df4d666'+ '&s='+ searchTerm)
    this.setState({ Movies: response.data.Search})
  }

  render() {
    return (
      <div>
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
        </Grid>
      </Grid>
      <ImageDisplay movies={this.state.Movies}/>
      </div>
    )
  }
}

export default App;
