import { useState } from "react";
import './Generator.css'

const Generator = () => {
    let contrasena = "Your password";
    const [pass, setPass] = useState(contrasena)
    let caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    function generarContrasena() {
        contrasena = ""
        const opcionesLetras = document.getElementById("tipos").value;
        const opciones = document.getElementById("opciones");
        const maxcaract = opciones.value
        const mayusculas = document.querySelector('#mayusculas')
        const mayusminus = mayusculas.value

        if (opcionesLetras === "Solo letras"){
            caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            if (mayusminus === "Solo mayúsculas"){
                caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            } else if (mayusminus === "Solo minúsculas"){
                caracteres = "abcdefghijklmnopqrstuvwxyz"
            }
        } else if (opcionesLetras === "Solo números"){
            caracteres = "0123456789"
        } 
         else if (opcionesLetras === "Números y letras"){
            caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            if (mayusminus === "Solo mayúsculas"){
                caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            } else if (mayusminus === "Solo minúsculas"){
                caracteres = "0123456789abcdefghijklmnopqrstuvwxyz"
            }
        } 

        for (let i = 0; i < maxcaract; i++) {
            setPass(contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length)))
        }
        console.log(contrasena)
        return contrasena
      }

    return (
        <div className="generatorContainer">
            <div className="options">
                <div>
                <label className="labels" htmlFor="opciones">Number of characters: </label>
                <select id="opciones" defaultValue={12}>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
                </div>
                <div>
                <label className="labels" htmlFor="tipos">Character types: </label>
                <select id="tipos" defaultValue={'Números y letras'}>
                    <option value="Números y letras">Numbers and letters</option>
                    <option value="Solo letras">Only letters</option>
                    <option value="Solo números">Only numbers</option>
       
                </select>
                </div>

                <div>
                <label className="labels" htmlFor="mayusculas">Upper and lower case: </label>
                <select id="mayusculas" defaultValue={'Incluir ambas'}>
                    <option value="Incluir ambas">Both</option>
                    <option value="Solo mayúsculas">Capital letters only</option>
                    <option value="Solo minúsculas">Only lowercase</option>
       
                </select>
                </div>

            </div>
            <div>
                <h2 id='h2pass'>{pass}</h2>
            </div>
            <div>
                <button id="botonako" onClick={generarContrasena}>Generate!</button>
            </div>
        </div>
    )
}

export default Generator