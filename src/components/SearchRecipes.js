import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';


class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        };
    };

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.props.setRecipes(json.results)
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.search();
    };

    render() {
        return(           
            <Form onSubmit = {this.onSubmitHandler}>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Type dish or ingredient name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" 
                            placeholder="pizza" 
                            onChange = {event => this.setState(
                                {dish: event.target.value})
                            }
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button 
                            type="submit" >
                        Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        );
    };
};

export default connect(null, { setRecipes })(SearchRecipes);