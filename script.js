const texto=document.getElementById("texto").innerText;

let fala=new SpeechSynthesisUtterance(texto);

fala.lang="pt-BR";

fala.rate=1;

fala.pitch=1;

fala.volume=1;

let progresso=document.getElementById("progresso");

let intervalo;

document.getElementById("ler").onclick=()=>{

speechSynthesis.cancel();

fala=new SpeechSynthesisUtterance(texto);

fala.lang="pt-BR";

speechSynthesis.speak(fala);

let largura=0;

clearInterval(intervalo);

intervalo=setInterval(()=>{

largura++;

progresso.style.width=largura+"%";

if(largura>=100){

clearInterval(intervalo);

}

},600);

}

document.getElementById("pausar").onclick=()=>{

speechSynthesis.pause();

}

document.getElementById("continuar").onclick=()=>{

speechSynthesis.resume();

}

document.getElementById("parar").onclick=()=>{

speechSynthesis.cancel();

clearInterval(intervalo);

progresso.style.width="0%";

}

document.getElementById("contraste").onclick=()=>{

document.body.classList.toggle("altoContraste");

}

let tamanho=22;

document.getElementById("aumentar").onclick=()=>{

tamanho+=2;

document.getElementById("texto").style.fontSize=tamanho+"px";

}

document.getElementById("diminuir").onclick=()=>{

tamanho-=2;

if(tamanho<16)tamanho=16;

document.getElementById("texto").style.fontSize=tamanho+"px";

}