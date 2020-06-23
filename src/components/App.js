import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import '../styles/index.scss';

class App extends Component {
    render() {
        return(
            <Container>
                <h1 className="recipe__title text-center mb-3 mt-2">Recipe Finder</h1>
                <SearchRecipes />
                <RecipeList />
            </Container>
        );
    };
};

export default App;