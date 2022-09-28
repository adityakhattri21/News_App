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
        // console.log(response.data);
        // console.log(response.data.articles[0].title);

        const title = response.data.articles[0].title;
        const des = response.data.articles[0].description;
        const articleURL = response.data.articles[0].url;
        const imgURL = response.data.articles[0].urlToImage;

        // res.render("index" , {headLine: title ,  des: des , articleUrl: articleURL , imgUrl: imgURL});
        res.render("index");
    })
    .catch((error)=>{
        console.log(error);
    })
    
});

app.listen(port , () =>{
    console.log(`Server started at port ${port}`);
})