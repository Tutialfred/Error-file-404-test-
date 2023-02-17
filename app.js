const boton = document.querySelector(".boton")


const error = () => {
    for(let i = 0 ; i < 100; i--){
        document.querySelector(".bodys").innerHTML= i
        console.log(i)
    }
}

boton.addEventListener("click", error)