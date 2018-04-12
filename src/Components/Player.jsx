// Library imoports.
import React from 'react';
import PropTypes from 'prop-types';

// Compoenent imports.
import Counter from './Counter.jsx';

const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={ props.onRemove }>x</a>
                <span>{ props.name }</span>
            </div>
            <div className="player-score">
                <Counter score={ props.score } onChange={ props.onScoreChange }/>
            </div>
        </div>
    );
  }

Player.propTypes = {
    name: PropTypes.string.isRequired,
};

Player.defaultProps = {
    name: 'Anonymous',
};

export default Player;
