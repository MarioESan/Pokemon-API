import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: 'Pokemon/:id', component: PokemonDetailsComponent},
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: 'Pokemons', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
