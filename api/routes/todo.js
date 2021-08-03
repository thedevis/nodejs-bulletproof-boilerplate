const { Logger } = require('winston');
const { celebrate, Joi } =  require('celebrate');
const { Router} =  require('express');
const route = Router();
module.exports = (app)=>{
    app.use('/task', route);
    route.post('/',celebrate({
        body:Joi.object({
            user_id:Joi.number().required(),
            content:Joi.string().required()
        })
    }),async(req,res,next)=>{
        try{
            res.status(201).json(req.body);
        } catch(e){
            return next(e);
        }

    });

    route.get('/',async(req,res,next)=>{
        try{
            return res.status(200).json({status:"working"});
        } catch(e){
            return next(e);
        }
    })


}
