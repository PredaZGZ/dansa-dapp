const express = require('express');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config')

const router = express.Router();

const User = require('../../models/User');

const schemaRegister = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    // validate user
    const { error } = schemaRegister.validate(req.body)
    
    if (error) {
        return res.status(400).json({error: error.details})
    }

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    // create token
    const token = jwt.sign({
        name: user.name,
        email: user.email
    }, config.TOKEN_SECRET, {expiresIn: '1h'})
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})

router.post('/validate', async (req, res) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Acceso denegado1' })
    try {
        const verified = jwt.verify(token, config.TOKEN_SECRET)
        if(verified){
            res.status(200).json({error: null})
        } else {
            res.status(401).json({ error: 'Acceso denegado2' })
        }
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
    
})

module.exports = router;
