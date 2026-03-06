 const nota1 = document.getElementById("numero1")
 const nota2 = document.getElementById("numero2") 
 const resultado = document.getElementById("resultado")

 const button = document.getElementById("button") 

 function calcularMedia(){
   const valorNota1 = Number(nota1.value)
   const valorNota2 = Number(nota2.value)

   const media = (valorNota1 + valorNota2)/2

   resultado.innerText = `A média é ${media.toFixed(2)}`
 }
 
button.addEventListener("click", calcularMedia)

