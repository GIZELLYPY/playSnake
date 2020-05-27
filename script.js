let canvas  = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; 

window.onload = function(){
    var stage = document.getElementById("stage");
    var ctx = stage.getContext("2d") // dentro do context cria todos os desenhos, toda a parte grafica 

    // pintando a tela 
    ctx.fillStyle = "black"; // cor de preenchimento do context

    // comando para pintar 
    ctx.fillRect(0,0,stage.width, stage.height);

}

