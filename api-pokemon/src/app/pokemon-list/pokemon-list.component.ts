import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons : any[] = [];

  loanding : boolean = true;

  constructor (private pokemonService : PokemonService){}
    ngOnInit(): void {
      this.pokemonService.getPokemons().subscribe(data => {
        this.pokemons = data.results;

        this.loanding = false
      })
    }
  

}
