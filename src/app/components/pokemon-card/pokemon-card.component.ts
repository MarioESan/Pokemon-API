import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';
import { Pokemon } from 'src/app/Models/pokemon.model';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

    @Input('pokemon') pokemon: Pokemon = new Pokemon;

    pokemonDetails: PokemonDetails = new PokemonDetails;

    constructor(private pokeService: PokeapiService) { }

    ngOnInit(): void {
        this.pokeService.GetPokemonByName(this.pokemon.name)
        .subscribe(pokemonResult => this.pokemonDetails = pokemonResult);
    }

    getName(name:any) {
        return;
    }

    getnamename(){
        let variable='';
        this.getName(variable);
    }

}
