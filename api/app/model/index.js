import CarriedPokemon from "./models/carriedPokemon.js";
import Evolution from "./models/evolution.js";
import Pokemon from "./models/pokemon.js";
import StoredPokemon from "./models/stored_pokemon.js";
import Trainer from "./models/trainer.js";
import Type from "./models/type.js";


Pokemon.hasMany(Type, {
    as: "pokemon_has_type",
    foreignKey: "pokemon_id"
});

Type.belongsTo(Pokemon, {
    as: "type_of_pokemon",
    foreignKey: "pokemon_id"
});






export default {
    CarriedPokemon,
    Evolution,
    Pokemon,
    StoredPokemon,
    Trainer,
    Type,
};