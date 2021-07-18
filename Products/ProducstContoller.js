var knex = require("../Data_Base/database");
var db = require("../Data_Base/database");
const express = require("express");


const router  = express.Router();

/* inserção de produtos
knex.insert(produto).into("produtos").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/


// Aqui deve-se receber todos os produtos na tela

router.get("/products",(req,res)=>{
    
    knex.select().table("produtos").then(dados=>{
// mostra no console os dados do bd -- status : ok
        for (dado of dados)
        {
            console.log(dado["nome"] + " " + dado["preco"]);
        }
// envia pro front-end -- status : nao utilizado no front-end


        res.render("produtos/index.ejs",{ produtos : dados });

    }).catch(err=>{
        console.log(err);
    })

})

//rota de um unico produto

router.get("/product/:id",(req,res)=>{

    var id = req.params.id;

    knex.select().where("id",id).table("produtos").then(dados=>{
        //enviar pro front-end os dados relacionados ao id

        console.log(dados);
    
        res.render("produtos/prod.ejs",{jogo : dados})


   }).catch(err =>{
       console.log(err);
   })
})



//renderização da pagina para criação o jogo.
router.get("/product/criar",(req,res)=>{
    
    res.render("produtos/criar.ejs");

})


//renderização da pagina para editar o jogo.
router.get("/product/edit/:id",(req,res)=>{
        var id = req.params.id;
    
    // buscar no banco de dados o id.

    knex.select().where("id",id).table("produtos").then(dados=>{
         //enviar pro front-end os dados relacionados ao id

         console.log(dados);
     
         res.render("produtos/edit.ejs",{jogo : dados})


    }).catch(err =>{
        console.log(err);
    })
})

//rota de atualização
router.post("/product/update",(req,res)=>{

    var id = req.body.id;
    var name = req.body.nome;
    var preco = req.body.preco;
    var sinopse =  req.body.sinopse;
    var lançamento =  req.body.lançamento;

  console.log(id);

   knex.where({id : id}).update({nome : name, preco:preco, sinopse : sinopse, lançamento : lançamento}).table("produtos").then(data => {
        console.log(data);

        res.redirect("/products")
    }).catch(err => {
        console.log(err);
    });
    

})




// Inserir produto ao bd
router.post("/product",(req,res)=>{

    var name = req.body.nome;
    var preco = req.body.preco;
    var sinopse =  req.body.sinopse;
    var lançamento =  req.body.lançamento;


    var produto = {
        nome : name,
        preco : preco,
        sinopse: sinopse,
        lançamento: lançamento
    }

    knex.insert(produto).into("produtos").then(data => {
        console.log(data);

        res.redirect("/products")
    }).catch(err => {
        console.log(err);
    });

})

router.post("/product/delete/:id",(req,res)=>{
    var id = req.params.id;

    knex.where({id : id}).delete().table("produtos").then(dados=>{
        
        console.log(dados);

        res.redirect("/");
    }).catch(err=>{
        console.log(err);
    })



})



module.exports = router;




