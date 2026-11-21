/* 
[]Clicar no botão e fazer o formulario ir ao centro e colocar a mascar
depois clicar fora do formulario e voltar ele a posição original
 []Qual botão?
 []Qual mascara?
 []mecher o formualario como?
 []como assim esconder o fomulario
*/

const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function mostrar_form() { 
    formulario.style.left="50%";
    formulario.style.transform="translatex(-50%)";
    mascara.style.visibility="visible";

}

function esconder_form() { 
    formulario.style.left ="-340px";
    formulario.style.transform="translatex(0)";
    mascara.style.visibility="hidden";

}