import { useState } from "react";

const IMC = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculoIMC = () => {
        const altura2 = altura * altura;
        const quaseTotal = peso / altura2;
        const total = quaseTotal.toFixed(2)

        if (total <= 18.4) {
            return (
                <>
                    <p><strong>IMC:</strong><br></br>{total}</p>
                    <p>Magreza</p>
                </>
            )
        } else if (total >= 18.5 && total <= 24.9) {
            return (
                <>
                    <p><strong>IMC:</strong><br></br>{total}</p>
                    <p>Normal</p>                    
                </>
            )
        } else if (total >= 25 && total <= 29.9) {
            return (
                <>
                    <p><strong>IMC:</strong><br></br>{total}</p>
                    <p>Sobrepeso</p>                    
                </>
            )
        } else if (total >= 30 && total <= 39.9) {
            return (
                <>
                    <p><strong>IMC:</strong><br></br>{total}</p>
                    <p>Obesidade</p>                    
                </>
            )
        } else if (total > 40) {
            return (
                <>
                    <p><strong>IMC:</strong><br></br>{total}</p>
                    <p>Obesidade grave</p>                    
                </>
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
            <div className="estatisticas">
                <p>
                    MENOR QUE 18,5	MAGREZA <br />
                    ENTRE 18,5 E 24,9	NORMAL <br />
                    ENTRE 25,0 E 29,9	SOBREPESO <br />
                    ENTRE 30,0 E 39,9	OBESIDADE <br />
                    MAIOR QUE 40,0	OBESIDADE GRAVE
                </p>
                <p>
                    MAGREZA <br />
                    NOMRAL <br />
                    SOBREPESO <br />
                    OBESIDADE <br />
                    OBESIDADE GRAVE <br />
                </p>
            </div>
            {calculoIMC()}
        </form>
    )
}

export default IMC;