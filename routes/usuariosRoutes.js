import express from "express";

const router = express.Router();

router.get('/', function(res, req) {
    res.json({msg: 'Hola Mundo en express'});
});

router.get('/nosotros', function(res, req) {
    res.send('información de nosotros');
});

export default router