  const mongoose=require('mongoose')

  //schema
  const Productschema= new mongoose.Schema({    
      
                  name:{
                        type:  String,
                        required:true,
                        trim:true      

                     },
                 img:{
                    type:  String,
                        required:true,
               
                  },
                 price:{
                    type:  Number,
                        required:true,
               
                  },
                 description:{
                    type:  String,
                        
                        trim:true
               
                  },
                  reviews:[
                     {
                         type: mongoose.Schema.Types.ObjectId,
                         ref: 'Review'
                     }
                 ]


               
               }

  )
  //model
  let Product=mongoose.model('Product',Productschema)
  module.exports=Product;