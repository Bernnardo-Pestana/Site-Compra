const express = require("express");

const CProducts = require("./Products/ProducstContoller");

// teste com jogos do banco
var knex = require("./Data_Base/database");
//
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.set('view engine ','ejs');

app.use(express.static('public'));


app.use("/",CProducts);




app.get("/",(req,res)=>{


    knex.select().table("produtos").then(dados=>{            
        // envia pro front-end -- status : nao utilizado no front-end
            
        res.render("index.ejs",{ produtos : dados });
        
            }).catch(err=>{
                console.log(err);
            })
    

})

app.listen(8888, ()=>{
    console.log("Estou vivo")
})