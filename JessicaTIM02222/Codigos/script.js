function somar (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number(document.querySelector("#numero2").value)

    let resultado = numero1 + numero2       
    
    console.log(numero1)
    console.log(numero2)
    console.log(resultado)
  

    document.querySelector("#resultado").value = resultado
    }
 function subtrair(){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number(document.querySelector("#numero2").value)
   
    let resultado = numero1 -numero2       
        
    console.log(numero1)
    console.log(numero2)
     console.log(resultado)
      
    
    document.querySelector("#resultado").value = resultado
        }
function multiplicar (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number(document.querySelector("#numero2").value)
        
    let resultado = numero1 *numero2       
            
    console.log(numero1)
    console.log(numero2)
    console.log(resultado)
          
        
    document.querySelector("#resultado").value = resultado
            }
function divisão(){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number(document.querySelector("#numero2").value)
    if (numero2 !=0) {
        let resultado = numero1/numero2   
        document.querySelector("#resultado").value = resultado
    }
}

function apagarErro(){
    document.querySelector("#erroZero").innerText=" "
}
function Limpar(){
    document.querySelector("#erroZero").innerText=" "
}
                 
