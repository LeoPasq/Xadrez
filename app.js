// JOGO DO LEO DE XADREZ
alert('Boas Vindas ao site do Leo');
let nome = prompt('Qual o seu nome?');
let somaPecas = 0;
let valMax = 500;
let numAleatorio =  parseInt(Math.random() * valMax +1);
alert(`${nome}, voce ganhara pontos pelas peças de xadrez que inserir. A cada jogada lhe direi seus pontos`);
while (somaPecas < numAleatorio) {
let pecaXadrez = prompt('escolha uma peça de xadrez').toLowerCase();
if (pecaXadrez == 'rei') {
   somaPecas += 200;
} else 
   if (pecaXadrez == 'dama') {
       somaPecas += 90;
}  else 
      if (pecaXadrez == 'torre') {
         somaPecas += 50;
}     else 
         if (pecaXadrez == 'bispo') {
            somaPecas += 40;
}        else 
               if (pecaXadrez == 'cavalo') {
                  somaPecas += 30;
}              else 
                  if (pecaXadrez == 'peão') {
                     somaPecas += 10;
}                 else {
                     somaPecas -= 50;
}
alert(`${nome}, a soma total dos pontos é: ${somaPecas}`);
}
alert(`Chess ${nome}, voce conseguiu, foi muito perspicaz!!`);
alert(`Voce somou mais que ${numAleatorio} e venceu o jogo de Xadrez!`);
