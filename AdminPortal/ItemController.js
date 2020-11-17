var ItemModel= require("../models/Item");

var GetItemFromDb = (req,res) =>
{
    ItemModel.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}
var GetItemById = (req,res) =>
{
    var idInfo = req.params.id;
    ItemModel.find({_id:idInfo},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}
var UpdateItemInfo = (req,res)=>
{
    var updateId = req.body._id;
    var updateName = req.body.iname;
    var updatePrice = req.body.price;
    var updateImage = req.body.image;
    ItemModel.update({_id:updateId},{$set:{iname:updateName,price:updatePrice,image:updateImage}},(err,result)=>
    {
        if (err) throw err;
        console.log(result);
        if(result.ngModified>0)
        {
        res.json({"msg":"Record updated"});
        }
        else
        {
            res.json({"msg":"Record didn't update"})
        }
    })
}

var DeleteItemInfo = (req,res) =>
{
    var deleteId = req.params.id;
    ItemModel.deleteOne({_id:deleteId},(err,result)=>
    {
        if (err) throw err;
        res.send("Record delete " + result)
    })
}

var StoreItemInfo = (req,res)=>
{
    let item = new ItemModel(
        {
            _id: req.body._id,
            iname:req.body.iname,
            price: req.body.price,
            image: req.body.image,
            company:req.body.company
        }
    );
    product.save((err,result)=>{
        if (err) throw err;
        res.send("Record stored successfully in Db "+result)
    })
}

module.exports = {GetItemFromDb,GetItemById,StoreItemInfo,UpdateItemInfo,DeleteItemInfo};