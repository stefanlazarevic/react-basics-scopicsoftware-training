// Library imports.
import React from 'react';
import { render } from 'react-dom';

// Data imports.
import players from './data';

// Component imports.
import Scoreboard from './Containers/Scoreboard.jsx';


render(<Scoreboard players={players}/>, document.getElementById('root'));
