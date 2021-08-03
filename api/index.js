const { Router } = require('express');
const todo = require('./routes/todo');
module.exports=()=>{
    const app = Router();
    todo(app);
    return app;
}
