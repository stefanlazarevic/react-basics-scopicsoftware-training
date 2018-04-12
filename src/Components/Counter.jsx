// Library imports.
import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={ () => props.onChange(-1) }>
                <span>-</span>
            </button>
            <div className="counter-score">{ props.score }</div>
            <button className="counter-action increment" onClick={ () => props.onChange(1) }>
                <span>+</span>
            </button>
        </div>
    );
};

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

Counter.defaultProps = {
    score: 0,
};

export default Counter;
