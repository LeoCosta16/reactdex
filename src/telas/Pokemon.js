import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';
import PokemonCard from '../componentes/PokemonCard';
import PokemonCardInfo from '../componentes/PokemonCardInfo';




class Pokemon extends Component {
  render() {
    const id = this.props.match.params.id;
    return ( 
    <div>
      <Topbar titulo="Pokemon" cor="primary" />
      <div style={{ marginTop: 72}}>
        <PokemonCardInfo pokemonId={id} />
      </div>
      
    </div>
    );
  }
}

export default Pokemon;
