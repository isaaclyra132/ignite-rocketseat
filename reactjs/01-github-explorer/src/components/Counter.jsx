import { useState } from 'react';

// Sempre que tiver 'use' na frente é um hook -> gancho

/* imutabilidade 
*   usuarios = ['diego3g', 'dieegosf', 'danileao']
*   usuarios.push('rafacamarda') -> isso não é imutabilidade
*   então como fazer?
*   novoUsuarios = [...usuarios, 'rafacamarda'] 
*/

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter+1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment} type="button">
                Increment
            </button>
        </div>
    );
}