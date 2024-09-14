import React from 'react';
import PokemonCard from './PokemonCard';

// const pokemonList = ['pikachu', 'squirtle', 'mewtwo'];

export default class PokemonFetcher extends React.Component {

	constructor(props){
		// super is React.Component 
		super(props);

		this.state = {
			pokemonList: ['pikachu', 'squirtle', 'mewtwo']
		}
	}

	render(){
		return (
			<div>
				<h1>Pokemon Data</h1>
				{this.state.pokemonList.map(pokemon => {
					return <PokemonCard name={pokemon} />
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

