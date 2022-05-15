import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class Evolution extends Model {}

Evolution.init({
    base_pokemon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    evolution_pokemon_id: {
        type: DataTypes.INTEGER,
    },
    evolution_level: {
        type: DataTypes.INTEGER,
    },
    require_stone: {
        type: DataTypes.BOOLEAN,
    },
    require_exchange: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false,
    sequelize,
    tableName: "evolution"
});

export default Evolution;