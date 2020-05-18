import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favouriteRecipe } from '../actions';

class RecipeItem extends Component {
    constructor() {
        super();

        this.state = {
            favourited: false
        };
    };

    onClickHandler(recipe) {
        this.props.favouriteRecipe(recipe);
        this.setState({ favourited: true})
    };

    render() {
        let { recipe } = this.props;
        return (
            <div className="recipe-item">
                {
                    this.props.favouriteButton ?
                    
                        this.state.favourited ?
                        <div className="recipe-star-fav" >
                             &#9733;
                        </div>
                        :
                        <div 
                            className="recipe-star" 
                            onClick = {() => this.onClickHandler(recipe)}>
                             &#9734;
                        </div>
                    
                    :
                    <div></div>
                }
                
                
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4 className="text-center">{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                    
                </div> 
                <img 
                    src={recipe.thumbnail !==undefined ? recipe.thumbnail : null} 
                    alt="recipe" 
                    className="recipe-img" />
            </div>
        );
    };
};

export default connect(null, {favouriteRecipe})(RecipeItem);