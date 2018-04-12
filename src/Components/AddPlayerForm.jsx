import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component {

    static propTypes = {
        addNewPlayer: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addNewPlayer(this.state.name);

        this.setState({
            name: '',
        });
    }

    handleInputChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    render() {
        return (
            <div className="add-player-form">
                <form onSubmit={ this.onSubmit }>
                    <input type="text" value={ this.state.name } onChange={ this.handleInputChange } />
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        );
    }
}
