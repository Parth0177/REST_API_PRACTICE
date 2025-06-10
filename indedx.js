const express= require('express');
const app = express();

const PORT= 3003;
const path = require('path')
const {v4: uuidv4}= require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));





app.listen(PORT,()=>{
  console.log(`Server is running on port  ${PORT}`);  
})