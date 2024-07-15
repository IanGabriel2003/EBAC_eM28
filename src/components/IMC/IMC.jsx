import { useState } from "react";

const IMC = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculoIMC = () => {
        const altura2 = altura * altura;
        const total = peso / altura2;

        if (total <= 18.4) {
            return (
                <p>Magreza</p>
            )
        } else if (total >= 18.5 && total <= 24.9) {
            return (
                <p>Normal</p>
            )
        } else if (total >= 25 && total <= 29.9) {
            return (
                <p>Sobrepeso</p>
            )
        } else if (total >= 30 && total <= 39.9) {
            return (
                <p>Obesidade</p>
            )
        } else if (total > 40) {
            return (
                <p>Obesidade grave</p>
            )
        } else {
            return null;
        }
    }

    return (
        <form>
            <input 
                type="number" 
                placeholder="Altura" 
                onChange={e => setAltura(parseFloat(e.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Peso" 
                onChange={e => setPeso(parseFloat(e.target.value))} 
            />
            {calculoIMC()}
        </form>
    )
}

export default IMC;