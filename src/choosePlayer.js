import React, { Component } from 'react';
import './App.css';

class Player extends Component {

    handleForm(e) {

        e.preventDefault()

        this.props.player(e.target.player.value)
    }

    render() {
        return (

            <form onSubmit={(e) => this.handleForm(e)}>
                <label>
                    <input name="player" type="radio" value="X" />
                        Player X starts first
                    </label>
                <br />
                <label>
                    <input name="player" type="radio" value="O" />
                        Player O starts first
                    </label>
                <br />
                <input type="submit" value="Start Game!" />
                <br />
            </form>

        )
    }
}
export default Player
