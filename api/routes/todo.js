const { Logger } = require('winston');
const { celebrate, Joi } =  require('celebrate');
const { Router} =  require('express');
const route = Router();
module.exports = (app)=>{
    route.post('/task',celebrate({
        body:Joi.object({
            user_id:Joi.number().required(),
            content:Joi.string().required()
        })
    }),async(req,res,next)=>{
        try{
            res.json(201).json(req.body);
        } catch(e){
            return next(e);
        }

    })
}
