
var carrinho = []

function ver_carrinho()
{
    carrinho.forEach( obj =>{

        console.log(obj.id );

    })
}

function add_carrinho(){

   var id = $("#id").val();
   var nome = $("#nome").val();
   var preco = $("#preco").val();


    Jogo = {
        
        id : id,
        nome : nome,
        preco : preco,
    }
    console.log(Jogo.id + " " +  Jogo.nome + " " +  Jogo.preco)

    carrinho.push(Jogo)

}

function teste()
{

 obj = {
 id : 4,
 name :"Ney",
 price : 35

 }
 add_carrinho(obj)

 obj = {
 id : 5,
 name :"Cujao",
 price : 35

 }
 add_carrinho(obj)

 obj = {
 id : 6,
 name :"Maria",
 price : 35

 }
 add_carrinho(obj)


 console.log("Deu certo em add....")
}


    

