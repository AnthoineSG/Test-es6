import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class storedPokemon extends Model {}

storedPokemon.init({
    trainer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    pokemon_id: {
        type: DataTypes.INTEGER
    },
    pokemon_level: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    sequelize,
    tableName: "stored_pokemon"
});

export default storedPokemon;