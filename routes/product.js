const express=require('express')
const Product=require('../models/Product')
const router=express.Router()
const { validateProduct } = require('../validatefunc')
//read
// db-> utha ker show kero
router.get('/products',async(req,res)=>{

  let products=await Product.find()
  res.render('app',{products, success:req.flash('success')})

})

// kisiko upload kerna hai kuch toh ->new

router.get('/products/new',(req,res)=>{
          res.render('new')
         
})
router.post('/products/new',(req,res)=>{
  res.redirect('/products/new')
}


)

//actually change data
router.post('/products' ,async(req,res)=>{
  try{
    let {name,img,price,desc }=req.body;
    await Product.create({name,img,price,desc}) //create->automatically save
    req.flash('success',"new product added succesffully")
    res.redirect('/products')
  }  //by default->undefined dekhata ushke liye url encoded use kerna hota hai
  catch(e){
    res.render('error' , {err : e.message})
  }
}
 
)

// <-------first half--->


//show particular product(thick)

router.get('/products/:id', async (req,res)=>{
    let {id}=req.params
    let foundproduct= await Product.findById(id).populate('reviews')
    // console.log(foundproduct);
    res.render('show',{foundproduct })
}
)

//data edit -> edit form
router.get('/products/:id/edit',async (req,res)=>{
   let {id}=req.params
  
   let foundproduct=  await Product.findById(id)
   res.render('edit',{foundproduct})
        

})

//update-> edit wala page
 router.patch('/products/:id',async (req,res)=>{
    let {id}=req.params
    let {name,img,price,description}=req.body
    await Product.findByIdAndUpdate(id,{name,img,price,description})
    res.redirect('/products')
    
})

//delete
router.delete('/products/:id', async (req,res)=>{

    let {id}=req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})










module.exports=router;