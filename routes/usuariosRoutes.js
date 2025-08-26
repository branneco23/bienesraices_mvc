import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Hola Mundo en express'});
});

router.post('/', (req, res) => {
    res.json({msg: 'información de nosotros'});
});

export default router