const {productValidSchema,reviewValidSchema}=require('./schema')

const validateProduct = (req,res,next)=>{
    let {name , img , price , desc} = req.body;
    const {error} = productSchema.validate({name , img , price , desc})
    if(error){
        const msg =  error.details.map((err)=>err.message).join(',')
        return  res.render('error' , {err:msg})
    }
    next();
}
module.exports=validateProduct;