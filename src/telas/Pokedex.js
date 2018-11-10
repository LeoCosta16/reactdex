import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';
import PokemonCard from '../componentes/PokemonCard';

const listaPokemons = props =>
  [1, 2, 3, 10033, 4, 5, 6, 10034, 10035, 7, 8, 9, 10036, 69, 208, 252, 253, 254, 10065, 255, 256, 257, 10050, 258, 259, 260, 10064, 387, 388, 389, 390, 391, 392, 393, 394, 395, 398, 445, 469, 472, 483, 484, 493, 706].map(id =>{
    return (
    <div 
      style={{ margin:16, cursor: 'pointer' }}
      key={id}
      onClick={() => props.history.push(`/pokemon/${id}`)}
    >
      <PokemonCard pokemonId={id} />
    </div>
    );
  });



class Pokedex extends Component {
  render() {
    return ( 
    <div>
      <Topbar titulo="Pokedex" cor="secondary" />
      <div style={{marginTop: 72}}>{listaPokemons(this.props)}</div>
      
    </div>
    );
  }
}

export default Pokedex;
