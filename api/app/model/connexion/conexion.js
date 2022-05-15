import { Sequelize } from "sequelize";

function getConnexion() {
    return new Sequelize(process.env.BD_URL, {
        logging: true
    });
}

export default getConnexion;