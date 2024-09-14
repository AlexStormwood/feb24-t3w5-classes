import React from 'react';
import PokemonCard from './PokemonCard';

// const pokemonList = ['pikachu', 'squirtle', 'mewtwo'];

export default class PokemonFetcher extends React.Component {

	constructor(props){
		// super is React.Component 
		super(props);

		this.state = {
			pokemonList: [],
			// pokemon1: null,
			// pokemon2: null
		}
	}

	// runs automatically ONCE when the page first loads 
	async componentDidMount(){

		for (let index = 0; index < 6; index++) {
			
			// generate a random number for random Pokemon number 
			let randomNumber = Math.floor(Math.random() * 1025) + 1;

			// pass random Pokemon number into fetch request
			let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
			let data = await response.json();

			// set fetch response data into state 
			// this.state.pokemonList.push(data);
			// this.setState({pokemonList: [data]});
			// this.setState({pokemonList: [...this.state.pokemonList, data]});
			// this.setState({pokemonList: [...this.state.pokemonList, data]});
			this.setState((previousState) => {
				return {
					pokemonList: [...previousState.pokemonList, data]
				}
			});
			
		}
		

		console.log("PokemonFetcher first load on the page");
	}

	render(){
		return (
			<div>
				<h1>Pokemon Data</h1>
				{this.state.pokemonList.map(pokemon => {
					return <PokemonCard name={pokemon.name} />
				})}

				<button onClick={() => {
					this.setState({pokemonList: []});
				}}>
					Empty the state
				</button>
			</div>
			
		);
	}
}

