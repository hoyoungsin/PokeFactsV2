import React, { Component } from "react";

class Pokemon extends Component {
    constructor() {
        super()
        this.state = {
            src: "",
            name: "",
        };
    }

    componentDidMount() {
        this.getSprite()
    }

    getSprite = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
            .then(res => res.json())
            .then((data) => this.setState({
                src: data.sprites.front_default,
                name: data.name
            }))
    }

    render() {
        return (
            <a className="pokemon" href="#info-modal">
                <img className="pokeSprie" id={this.props.id} src={this.state.src} alt={this.state.name} ></img>
            </a>
        )
    }
}

export default Pokemon;