import React from 'react';
import {getPokeData} from "../pokemon.js";
import CardList from "../components/CardList.js";
import ScrollBox from "../components/ScrollBox.js";
import SearchBox from "../components/SearchBox.js";
import '../App.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPokemon: [],
            searchField: '',
        }
    }

    componentDidMount() {
        const tempPokemon = [];
        for (let i = 1; i <= 500; i++) {
            getPokeData(i)
                .then((data) =>
                    tempPokemon.push(data))
                .then(() => {
                    this.setState({allPokemon: tempPokemon})
                })
                .catch(error => {
                    console.log("could not get due to: ", error)
                })
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }


    render() {
        const {allPokemon, searchField} = this.state;
        const filteredPokemon = allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchField.toLowerCase()));

        if (!allPokemon.length) {
            return <h1>Loading the national dex...</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1'}>National Dex</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <ScrollBox>
                        <CardList allPokemon={filteredPokemon}></CardList>
                    </ScrollBox>
                </div>
            )
        }
    }
}

export default App;