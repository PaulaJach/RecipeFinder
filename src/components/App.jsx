import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import '../styles/index.css';

class App extends Component {
    render() {
        return(
            <Container>
                <h2>Recipe Finder</h2>
                <SearchRecipes />
                <RecipeList />
            </Container>
        )
    }
}

export default App;