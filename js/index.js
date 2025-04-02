

//Variables para mi Boton de Login/Logout
let buttonSession = document.querySelector('#btnLogin')
let login = 'Iniciar sesíon'
let logout = 'Cerrar sesión'
//Variable para mi boton de denifinir PetloPedia
let buttonDefinition = document.querySelector('#btnAddDef')

//Variable de funcion de BtnLikes
let buttonCat = document.querySelector('#mgGato')
let gato = 'Gato Atigrado'
let buttonDog = document.querySelector('#mgPerro')
let perro = 'Golden Retriever'
var contador = 1;

//Funcion que aumenta los likes
const fnBtnSuma = (contenido, mascota) => {
    alert(`${mascota} was liked`)
    let valor = contenido.textContent; // => 22 me gustas / 0 => [2] , 1 => [2]
    let primerValor = valor.charAt(0)
    let segundoValor = valor.charAt(1)
    let numeroDosValores = Number(primerValor + segundoValor)
    return contenido.textContent = `${numeroDosValores + contador} me gusta`
}

//Onclick para cambiar el estado de mi boton
buttonSession.addEventListener('click', () => {
    let valor = buttonSession.textContent;
    //Condicional ternario
    valor === login ? buttonSession.textContent = logout : buttonSession.textContent = login
})

//Onclick para eliminar mi boton
buttonDefinition.addEventListener('click', () => {
    buttonDefinition.remove()
})

buttonCat.addEventListener('click', () => {
    fnBtnSuma(buttonCat, gato)
})


buttonDog.addEventListener('click', () => {
    fnBtnSuma(buttonDog, perro)
})

