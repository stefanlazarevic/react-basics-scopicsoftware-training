import React, { Component } from 'react';

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elapsedTime: 0,
            previousTime: 0,
            running: false
        };

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onTick = this.onTick.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick() {
        if (this.state.running) {
            const now = Date.now();

            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + now - this.state.previousTime,
            });
        }
    }

    onStart() {
        this.setState({
            running: true,
            previousTime: Date.now(),
        });
    }

    onStop() {
        this.setState({
            running: false,
        });
    }

    onReset() {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
        });
    }

    render() {

        const time = Math.floor(this.state.elapsedTime / 1000);

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">
                    <span>{ time }</span>
                </div>
                {
                    this.state.running ?
                    <button onClick={ this.onStop }>Stop</button> :
                    <button onClick={ this.onStart }>Start</button>
                }
                <button onClick={ this.onReset }>Reset</button>
            </div>
        );
    }
}
