import './Pasta.css'

function Pasta({corFundo, corFrente, conteudo}) {

    // depois, talvez amanhã, eu vou configurar o js para se adaptar conforme eu for adicionando papeis nas pastas
    return (
        <div className="pasta">
            <div className='fundo' style={{backgroundColor: corFundo}}>
                <div className='meio'>
                    <p>{conteudo.titulo}</p>
                </div>
            </div>

            <div className='frente' style={{backgroundColor: corFrente}}>
            </div>
        </div>

    )
}

export default Pasta;