import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

// import Type from "./app/model/models/type.js";
// import Trainer from "./app/model/models/trainer.js";
// import storedPokemon from "./app/model/models/stored_pokemon.js";
import {pokemon} from "./app/model/index.js";
// import evolution from "./app/model/models/evolution.js";
// import {carriedPokemon} from "./app/model/index.js";

app.get("/",
    // async (req, res) => {
    //     const type = await Type.findAll();
    //     res.json(type);
    // }

    // async (req, res) => {
    //     const type = await Trainer.findAll();
    //     res.json(type);
    // }

    // async (req, res) => {
    //     const type = await storedPokemon.findAll();
    //     res.json(type);
    // }

    async (req, res) => {
        const type = await pokemon.findAll();
        res.json(type);
    }

    // async (req, res) => {
    //     const type = await evolution.findAll();
    //     res.json(type);
    // }

    // async (req, res) => {
    //     const type = await carriedPokemon.findAll();
    //     res.json(type);
    // }
);

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
});