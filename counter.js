//let counter = 0 ;

if(!localStorage.getItem('counter')){
  localStorage.setItem('counter', 0);
}

function count(){
  let counter = localStorage.getItem('counter');
  counter++;

  //alert(counter);
  document.querySelector('h1').innerHTML = counter ;
  localStorage.setItem('counter', counter);
/*
  if (counter % 10 === 0){ //multiplo de 10
    alert (`Count is now ${counter}`);
  }
*/
}
  //addEventListener geralmente tem dois argumentos (event to listen, function)
document.addEventListener('DOMContentLoaded', function(){
    //espera o conteudo de dom ser baixado e aperta o botao
  document.querySelector('h1').innerHTML = localStorage.getItem('counter');
  document.querySelector('button').onclick = count ;

  //setInterval(count, 1000); //run the count function update every 1000 milisec
});
  //document.querySelector('button').onclick = count ;
