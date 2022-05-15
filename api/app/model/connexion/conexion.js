import { Sequelize } from "sequelize";

const connexion = new Sequelize("postgres://pokemon:pokemon@localhost:5432/pokemon",
    {
        define: {
            logging: true
        }
    }
);

export default connexion;