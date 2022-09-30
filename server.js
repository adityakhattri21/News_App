const express = require('express');
const bodyParser = require('body-parser');
const https = require('https'); // JSON error in https consult any senior for it.
const axios = require('axios'); // good to use and parses data perfectly.
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const apiKey = `7520a3eb28324ed5838e710d827879e2`;

// const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

app.get("/" , (req,res) =>{

    axios.get(URL)
    .then((response)=>{
        res.render("index" ,{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
    
});

app.get("/enter" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get("/tech" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get("/business" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get("/science" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=science&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get("/health" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get("/sports" , (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=${apiKey}`)
    .then((response) =>{
        res.render("index",{newBlog: response.data});
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.listen(port , () =>{
    console.log(`Server started at port ${port}`);
})