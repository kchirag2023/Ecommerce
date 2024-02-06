const joi =require('joi')
const productValidSchema= joi.object({
    name:joi.string().required(),
    img:joi.string().trim(),
    price:joi.number().min(0).required(),
    description:joi.string().trim()

})

const reviewValidSchema=joi.object({
    rating:joi.number().min(0).max(5),
    commment:joi.string().trim()
})

module.exports={productValidSchema,reviewValidSchema}