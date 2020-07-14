import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

class ImageDisplay extends Component {
    render() {
        if(!(this.props.movies)){
            return(
                <h1>Enter Something Valid!!</h1>
            )
        }
        const movies = this.props.movies.filter(i=>!(i.Poster==='N/A'))
        const all_movies=movies.map((file)=>(
            <img style={{ marginLeft: "5px", marginRight: "60px", marginBottom: "10px", marginTop: "10px"}} src={file.Poster}/> 
        ))
        return(
            <Grid container spacing={4}>
                {all_movies}
            </Grid>
        )
    }
}

export default ImageDisplay
