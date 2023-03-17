import { useState } from "react";
import './Generator.css'

const Generator = () => {
    let contrasena = "Aquí ira tu contraseña";
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
                <label className="labels" htmlFor="opciones">Cantidad de caracteres: </label>
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
                <label className="labels" htmlFor="tipos">Tipos de caracteres: </label>
                <select id="tipos" defaultValue={'Números y letras'}>
                    <option value="Números y letras">Números y letras</option>
                    <option value="Solo letras">Solo letras</option>
                    <option value="Solo números">Solo números</option>
       
                </select>
                </div>

                <div>
                <label className="labels" htmlFor="mayusculas">Mayúsculas y minúsculas: </label>
                <select id="mayusculas" defaultValue={'Incluir ambas'}>
                    <option value="Incluir ambas">Incluir ambas</option>
                    <option value="Solo mayúsculas">Solo mayúsculas</option>
                    <option value="Solo minúsculas">Solo minúsculas</option>
       
                </select>
                </div>

            </div>
            <div>
                <h2 id='h2pass'>{pass}</h2>
            </div>
            <div>
                <button id="botonako" onClick={generarContrasena}>Generar!</button>
            </div>
        </div>
    )
}

export default Generator