$(document).ready(function () {


    $(document).on("keydown", function (evento) {
        const tecla = evento.key.toUpperCase();


        const ehLetra = /^[A-Z]$/.test(tecla);
        if (!ehLetra) return;

        mostrarLetra(tecla);
    });

});



function falarLetra(letra) {

    if (!("speechSynthesis" in window)) return;

    var sintetizador = new SpeechSynthesisUtterance(letra);

    sintetizador.lang = "pt-BR";
    sintetizador.rate = 0.9;
    sintetizador.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(sintetizador);
}




function mostrarLetra(letra) {
    // Coloca a letra que foi digitada no topo da pagina
    $("#nome-letra-atual").text(letra);

    // As imagens seguem um padrão de nome, como "letraA.png".
    // O caminho da imagem é montado com base na letra pressionada.
    // Em seguida, atualiza a imagem do modal e seu texto alternativo (alt).
    $("#letra-imagem")
        .attr("src", "img/letras/letra" + letra + ".png")
        .attr("alt", "Letra " + letra);
    $("#letra-slot").addClass("mostrar");

    // Mostra a imagem do objeto correspondente
    mostrarObjeto(letra);

    // fala a letra em voz alta
    falarLetra(letra);
}

function mostrarObjeto(letra) {
    //deixei os nomes com padrao e faz a mesma coisa do mostra letra so que com os objetos 
    //troca o caminho da pasta e coloca o alt diferente
    //mesma coisa do de mostrar letra
    const caminhoImagem = "img/objects/objeto" + letra + ".png";

    $("#modal-image")
        .attr("src", caminhoImagem)
        .attr("alt", " LETRA :" + letra)
        .addClass("mostrar");
}
