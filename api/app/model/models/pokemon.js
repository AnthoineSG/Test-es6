import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class pokemon extends Model {}

pokemon.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    timestamps: false,
    tableName: "pokemon"
});

export default pokemon;