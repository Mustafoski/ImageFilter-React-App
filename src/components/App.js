import React from 'react';

import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        const response = 
        await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
             headers: {
                 Authorization: 'Client-ID 41a663a03bfd356be495ed657077aa4b9aa626d435ba7f90649795566624c7c8'
             }
            
        });
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div>
               <SearchBar onSubmit={this.onSearchSubmit} />
               <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
