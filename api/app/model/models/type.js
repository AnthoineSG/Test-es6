import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class Type extends Model {}

Type.init({
    pokemon_id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    name: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    sequelize,
    tableName: "type"
}
);

export default Type;