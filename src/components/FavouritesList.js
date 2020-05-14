import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavouritesList extends Component {
    render() {
        return (
            <div>
                <h4>Favourite Recipes:</h4>
                {
                    this.props.favouriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem 
                                key={index} 
                                recipe={recipe}
                                favouriteButton={false} />
                        )
                    })  
                } 
            </div>          
        )
    }
};

function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteRecipes
    }
};

export default connect(mapStateToProps, null)(FavouritesList);