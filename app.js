const express = require('express');
const app = express();
const Joi = require('joi');
const schema = Joi.object({
	username: Joi.string().min(3).required(),
	password: Joi.string().min(6).required()
});
app.get('/', (req,res)=>{
	res.send("200 OK");
})
app.use(express.json());
app.post('/users', (req,res)=>{
	const result = Joi.validate(req.body, schema);
	if(result.error == null){
		res.json({success: true, userId: 5});
	}else{
		res.status(400).json({success: false, message: 'Wrong username or password'})
	}
})

module.exports = app;