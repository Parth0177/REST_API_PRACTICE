const { log } = require('console');
const express = require('express');
const app= express();
const PORT= 3002;
const path = require('path');
const {v4: uuidv4}= require('uuid');
const methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'))


app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

let posts=[
  {
    id:uuidv4(),
    username:'Parth',
    followers:789,
    following:245,
    posts:13,
    img:'https://www.shutterstock.com/image-photo/happy-golden-retriever-shiba-dogs-600nw-2413261731.jpg'
  },
  {
    id:uuidv4(),
    username:'Aryan',
    followers:659,
    following:485,
    posts:18
  },
  {
    id:uuidv4(),
    username:'Shivansh',
    followers:589,
    following:455,
    posts:10
  },
  {
    id:uuidv4(),
    username:'Tinku',
    followers:125,
    following:25,
    posts:4
  },

]

app.get('/posts',(req,res)=>{
  res.render('index.ejs',{posts});
});

app.get('/',(req,res)=>{
  res.render('home.ejs');
})



app.listen(PORT,()=>{
  console.log(`Server is running on port  ${PORT}`);  
})