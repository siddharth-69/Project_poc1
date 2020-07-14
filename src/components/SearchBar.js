import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core';

export class SearchBar extends Component {
    state={
        searchTerm:''
    }

    handleChange = (event) =>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) =>{
        const {onFormSubmit} = this.props
        onFormSubmit(this.state.searchTerm)
        event.preventDefault()
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: "25px" }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Enter the movie name...."
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </form>
            </Paper>
        )
    }
}

export default SearchBar
