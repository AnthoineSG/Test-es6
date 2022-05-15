import sequelize from "../connexion/conexion.js";
import { DataTypes, Model } from "sequelize";

class Trainer extends Model {}

Trainer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    sequelize,
    tableName: "trainer"
});

export default Trainer;