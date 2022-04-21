export class PokemonDetails {
    id: number = 0;
    name: string = '';
    base_experience: number = 0;
    height: number = 0;
    is_default: boolean = false;
    order: number = 0;
    weight: number = 0;
    abilities!: [{
        is_hidden: boolean;
        slot: number;
        ability: Ability
    }];
    forms: any[] = [];
    game_indices: any[] = [];
    held_items: any[] = [];
    location_area_encounters: string = '';
    moves: any[] = [];
    past_types: any[] = [];
    sprites: Sprites = new Sprites;
    species: any = {};
    stats: any[] = [];
    types: any[] = [];
}

class Sprites {
    front_default: string = '';
    front_shiny: string = '';
    front_female: string = '';
    front_shiny_female: string = '';
    back_default: string = '';
    back_shiny: string = '';
    back_female: string = '';
    back_shiny_female: string = '';
}

class Ability {
    name: string = '';
    url: string = '';
}