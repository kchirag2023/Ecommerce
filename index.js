const express=require('express')
const app= express()
const path = require('path')
const productRoutes=require('./routes/product')
const methodOverride=require('method-override')
let seedDB=require('./seed')
const review=require("./routes/review")
const session=require('express-session')
const flash=require('connect-flash')


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>{console.log("error",err)})
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')));


// const seedDB=require('./seed')

// ek baar chalana

// seedDB(); 
app.use(express.urlencoded({extended:true})) //form data body parser to use post method data
app.use(methodOverride('_method'))

// seedDB() //baar baar store hojaega if not commented

// flash ka tarika 2 middle ware ek session or flash
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
}))
  app.use(flash());

  //middeleware to set local
app.use(
    (req,res,next)=>{
       res.locals.success= req.flash('success')
       res.locals.error= req.flash('error')
       next();
    }
)




app.use(productRoutes);
app.use(review)



const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server running at port : ${PORT}`)
})