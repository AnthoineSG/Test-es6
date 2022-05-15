import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class carriedPokemon extends Model {}

carriedPokemon.init({
    trainer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    pokemon_id: {
        type: DataTypes.TEXT,
    },
    pokemon_level: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    sequelize,
    tableName: "carried_pokemon"
}
);

export default carriedPokemon;