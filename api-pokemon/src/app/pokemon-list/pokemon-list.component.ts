import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  loading: boolean = true;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {

  this.pokemonService.getPokemons().subscribe((data: any) => {

    const results = data.results;

    this.pokemons = []; // limpiar antes

    results.forEach((pokemon: any) => {

      this.pokemonService.getPokemonDetail(pokemon.url)
        .subscribe((detail: any) => {
          this.pokemons.push(detail);
        });

    });

    this.loading = false;
  });
}
}
