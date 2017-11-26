var mongoose = require('mongoose');
var Category = require('../model/category.mode')
mongoose.model('Category');
exports.create = function(req,res){

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
