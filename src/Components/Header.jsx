// Library imports.
import React from 'react';
import PropTypes from 'prop-types';

// Component imports.
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';

const Header = (props) => {
    return (
        <div className="header">
            <Statistics players={ props.players }/>
            <h1>{ props.title }</h1>
            <Stopwatch />
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
