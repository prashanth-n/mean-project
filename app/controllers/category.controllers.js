var mongoose = require('mongoose');
var Category = require('../model/category.mode')
mongoose.model('Category');
exports.create = function(req,res){
    console.log("req body",req.body);
    var category = new Category(req.body);
    category.save(function(err) {
        if(err){
            console.log('err adding cat',err)
            return res.status(400).send({
                message:'Something went please try again'
            })
        } else {
            res.status(201).json(category);
        }
    })

}
exports.read = function(req,res){

}
exports.update = function(req,res){

}
exports.delete = function(req,res){

}
exports.list = function(req,res){
    Category.find().exec(function(err, categories){
        if(err){
            return res.status(400).send({
                message:'No category found'
            });
        } else {
            res.json(categories);
        }
    });
}
