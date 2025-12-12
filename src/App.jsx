import './App.css'
import Pasta from "./components/Pasta.jsx";

function App() {

    // to querendo um obj com titulo e desc para por no mouse no hover, faço aqui por enquanto mesmo
    const treinoCss = {
        titulo: "treino de css",
        desc: "🐱",
        link: 'https://github.com/MrCode-Man/FrontEnd_treino'
    }
    const treinoPOO = {
        titulo: "terminal em Java",
        desc: "😹",
        link: 'https://github.com/MrCode-Man/TerminalJava'
    }

  return (
    <div className='main'>
        <div className='cabecalho'>
            <h1 className="titulo">Olá, eu sou Gabriel.</h1>
            <h1 className="titulo">Estudo Engenharia de Software</h1>
            <h1 className='titulo'>pelo IF de Inhumas-GO</h1>
            <p className="subtitulo">Atualmente estou aprendendo a usar o React</p>
            <p className='subtitulo'>e esse é meu primeiro projeto</p>
        </div>

        <section className='pastas'>
            <Pasta corFundo='#4C5454' corFrente='#636F6F' conteudo={treinoCss}></Pasta>
            <Pasta corFundo='#C24B38' corFrente='#FF715B' conteudo={treinoPOO}></Pasta>
        </section>
    </div>
  )
}

export default App
