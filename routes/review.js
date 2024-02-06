const express=require('express');
const router=express.Router();
// const products=require('../models/product')
const Product = require('../models/Product');
const Review = require('../models/review');

// review route
router.post('/products/:id/rating',async(req,res)=>{
  let {rating,comments}=req.body;
  let {id}=req.params;
 //   product ko id se dundh ker review naam ke array mein push kerna hai Review ko
   let product= await Product.findById(id);
   let review= new Review({rating,comments});

   product.reviews.push(review);

   await product.save();
   await review.save(); 

  //  adding flsh msh
  req.flash('success'," review added succesfully")
  res.redirect(`/products/${id}`);



})
module.exports=router;                          