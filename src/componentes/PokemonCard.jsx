import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


class PokemonCard extends React.Component{
     
    state = {
       /*  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',nome: 'Charizard',
        num:  '006',
        alt:'17' */
        foto: '',
        nome: '',
        num: '',
        ability: '',
        hidden_ability: ''
        

    }; 


    componentDidMount(){
        this.carregarPokemon();
        this.carregarDescricaoPokemon();
    }

    carregarPokemon = async () => {
        console.log(this.props.pokemonId);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}/`);
        const data = await response.json();
        const nome = data.name;
        const foto = data.sprites.front_default;
        const num = data.id;
        const alt = data.height;
        const peso = data.weight;

        try {
            const hidden_ability = data.abilities[0].ability.name;
            const ability = data.abilities[1].ability.name;
            this.setState({nome, foto, num, alt, peso, ability, hidden_ability})
        } catch (error) {
            this.setState({nome, foto, num})
        }  

        //this.setState({nome, foto, num, alt, peso, ability, hidden_ability});
        
    };

    carregarDescricaoPokemon = async () => {
        console.log(this.props.pokemonId);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.pokemonId}/`);
        const data = await response.json();
        const descript = data.flavor_text_entries[1].flavor_text;

        this.setState({descript});
    };

    primeiraMaiscula(string) {
        return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
    };

    render(){
        const {foto, nome, num, alt, peso, ability, hidden_ability, descript} = this.state;
        console.log('Renderizei')
        return (
        <Card style={{margin: 16}}>
        <CardHeader
          avatar={<Avatar style={{ width: 80, height: 80}} src={foto} />} 
          title={this.primeiraMaiscula(nome)}
          subheader={num}
          
          
        />

        <CardContent>
          <Typography component= "p">          
          <div>Height: {alt}m</div><div>Weight: {peso}kg</div>
          <div>Ability: {this.primeiraMaiscula(ability)}</div>
          <div>Hidden Ability: {this.primeiraMaiscula(hidden_ability)}</div>
          {descript}

          
          
            
          </Typography>
        </CardContent>
        </Card>
        );
    }
};

export default PokemonCard;

