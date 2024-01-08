
const recargar =() => {
    location.reload()
}

// ------------------------------------------------------------------------------------------------

let tieneMayuscula = false;
let tieneMinuscula = false;
let tieneNumero = false;
let respuesta = document.querySelector("#cadena1")

const solicitarCadena1 = () => {
    const cadenaUsuario = prompt("Ingrese una cadena de texto:");
    const resultado = verificarCadena(cadenaUsuario);

    if (resultado === true) {
        respuesta.innerHTML = `
        <button class="btn btn-dark text-white" onclick="recargar()">↻</button>
        La cadena "<b>${cadenaUsuario}</b>" cumple con los criterios.`
    } else {
        respuesta.innerHTML = `
        <button class="btn btn-dark text-white" onclick="recargar()">↻</button> 
        La cadena "<b>${cadenaUsuario}</b>" NO cumple con los criterios`
    }
}

const verificarCadena = (cadena) => {

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena.charAt(i);

        if (cadena.length < 8) {
        } else if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        } else if (caracter >= 'a' && caracter <= 'z') {
            tieneMinuscula = true;
        } else if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }
    }
    return tieneMayuscula && tieneMinuscula && tieneNumero;
}

// ------------------------------------------------------------------------------------------------

let arregloNum = document.querySelector('#arreglo1')

const solicitarCadena2 = () => {
    const arregloaUsuario = prompt("Ingrese varios números separados por comas ( , ):")
    const entradaUsuario = arregloaUsuario.split(',').map(numero => parseInt(numero.trim()))
    const resultado = verificarArreglo1(entradaUsuario);

    if (resultado === 0 || entradaUsuario.every(x => isNaN(x)) || !arregloaUsuario) {
        arregloNum.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado números</b>`
    } else {
        arregloNum.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        Los números ingresados son: <b>"${arregloaUsuario}"</b> y el número más grande es: <b>"${resultado}"</b>.`
    }
}

const verificarArreglo1 = (array1) => {
    let numMayor = array1[0]
    
    for (let i = "1"; i < array1.length; i++) {
        if (array1[i] > numMayor) {
            numMayor = array1[i]
        }
    }
    return numMayor

}

// ------------------------------------------------------------------------------------------------

let palabrasArray = document.querySelector('#cadena2')

const solicitarCadena3 = () => {
    const cadenaUser = prompt("Escriba sus palabras separadas por espacios:")
    const entradaUser = cadenaUser.split(' ')
    const resultado = entradaUser.sort()

    if (!cadenaUser) {
        palabrasArray.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado palabras</b>`
    } else {
        palabrasArray.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        Las palabras ingresadas son: <b>"${cadenaUser}"</b>.<br>
        El resultado ordenado alfabéticamente es: <b>"${resultado}"</b>.`
    }
}

// ------------------------------------------------------------------------------------------------

let vocales = document.querySelector('#cadena3')

const solicitarCadena4 = () => {
    const cadenaVocal = prompt("Escriba una palabra o una frase:")
    const resultado = verificarCadena2(cadenaVocal)

    if (!cadenaVocal) {
        vocales.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado palabras o una frase</b>`
    } else {
        vocales.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El dato ingresado es: <b>"${cadenaVocal}"</b>.<br>
        La cantidad de vocales son: <b>"${resultado}"</b>.`
    }
}

const verificarCadena2 = (frase) => {
    let vocales = "aeiouAEIOU"
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (vocales.indexOf(frase[i]) !== -1){
            ++contador
        }
    }
    return contador
}

// ------------------------------------------------------------------------------------------------

let numerosP = document.querySelector('#cadena4')

const solicitarCadena5 = () => {
    const numerosUsuario = prompt("Escriba un número entero:")
    const resultado = verificarCadena3(numerosUsuario)

    if (!numerosUsuario){
        numerosP.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado números</b>`
    } else if (resultado === true){
        numerosP.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El número "${numerosUsuario}" <b>SI</b> es un número primo.`
    } else {
        numerosP.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El número "${numerosUsuario}" <b>NO</b> es número primo.`
    }
}

const verificarCadena3 = (numero) => {

    if (numero <= 1){
        return false
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

// ------------------------------------------------------------------------------------------------

let numerosF = document.querySelector('#cadena5')

const solicitarCadena6 = () => {
    const numerosFUser = prompt("Escriba su número")
    const resultado = verificarCadena4(numerosFUser)

    if (!numerosFUser){
        numerosF.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado números</b>`
    } else {
        numerosF.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El factorial de "${numerosFUser}" es <b>${resultado}</b>.`
    }
}

const verificarCadena4 = (numero) => {
    let total = 1
    for (let i = 1; i <= numero; i++) {
        total *= i
    }
    return total
}

// ------------------------------------------------------------------------------------------------

let palabrasL = document.querySelector('#cadena6')

const solicitarCadena7 = () => {
    const palabraL = prompt("Escriba sus palabras separadas por espacios:")
    const entradaU = palabraL.split(' ')
    const resultado = verificarCadena5(entradaU)

    if (!palabraL){
        palabrasL.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado palabras</b>`
    } else {
        palabrasL.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        Las palabras agregadas son: "${palabraL}". <br> 
        Y la palabra más larga es: <b>${resultado}</b>.`
    }
}

const verificarCadena5 = (words) => {
    let texto = words[0]

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > texto.length) {
            texto = words[i]
        }
    }
    return texto
}

// ------------------------------------------------------------------------------------------------

let pPalindromo = document.querySelector('#cadena7')

const solicitarCadena8 = () => {
    const palindromo = prompt("Escriba su frase y/o palabras separadas por espacios:")
    const resultado = verificarCadena6(palindromo)

    if (!palindromo){
        pPalindromo.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se han encontrado palabras</b>`
    } else if (resultado === true){
        pPalindromo.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El dato ingresado "${palindromo}" <b>es</b> palíndromo</b>.`
    } else {
        pPalindromo.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El dato ingresado "${palindromo}" <b>no</b> es palíndromo.`
    }
}

const verificarCadena6 = (cadena) => {
    let regex = /[\W_]/g
    const cadenaDeTexto = cadena.toLowerCase().replace(regex, '')
    return cadenaDeTexto === cadenaDeTexto.split('').reverse().join('')
}

// ------------------------------------------------------------------------------------------------

let pAnagrama = document.querySelector('#cadena8')

const solicitarCadena9 = () => {
    const cadena1 = prompt("Escriba el primer texto:")
    const cadena2 = prompt("Escriba el segundo texto:")
    const resultado = verificarCadena7(cadena1, cadena2)

    if (!cadena1 || !cadena2) {
        pAnagrama.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>Los datos ingresados no son correctos, vuelva a intentarlo</b>`
    } else if (resultado) {
        pAnagrama.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        Los textos <b>son</b> anagramas.`
    } else {
        pAnagrama.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        Los textos <b>no son</b> anagramas.`
    }
}

const verificarCadena7 = (cadena1, cadena2) => {
    let regex = /[\W_]/g
    
    const cadenaA = cadena1.replace(regex, '').toLowerCase()
    const cadenaB = cadena2.replace(regex, '').toLowerCase()

    if (cadenaA.length !== cadenaB.length) {
        return false
    }

    const cadena1Array = cadena1.split('').sort().join('')
    const cadena2Array = cadena2.split('').sort().join('')

    return cadena1Array === cadena2Array
}

// ------------------------------------------------------------------------------------------------

const nEntero = document.querySelector('#cadena9')

const solicitarCadena10 = () => {
    const numE = prompt("Escriba un número entero positivo")
    const resultado = verificarCadena8(numE)

    if (!numE) {
        nEntero.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        <b>No se ha ingresado el número</b>`
    } else if (resultado){
        nEntero.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El número ingresado es "${numE}". <br>
        Y los números primos menores o iguales son: <b>${resultado}</b>.`
    } else {
        nEntero.innerHTML = `<button class="btn btn-dark text-white" onclick="recargar()">↻</i></button>
        El número <b>no</b> es primo.`
    }
}

const verificarCadena8 = (n) => {
    const primos = []

    esPrimo = (num) =>{
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return num > 1
    }

    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) {
            primos.push(i)
        }
    }
    return primos
}