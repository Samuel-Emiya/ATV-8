import { useState, useEffect } from "react"

export function Exemplo2() {
    const [cep, setCep] = useState("")

    return(
        <section>
            <h2>Exemplo 2: Buscar endereço</h2>
            <div>
                <input type="number" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)}/>
            </div>
        </section>
    )
}