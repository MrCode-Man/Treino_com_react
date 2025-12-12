import './Pasta.css'
import {useRef, useState} from "react";

function Pasta({corFundo, corFrente, conteudo}) {

    const [infoVisisel, setInfoVisisel] = useState(false);
    const [posicaoInfo, setposicaoInfo] = useState({x: 0, y: 0});
    const meioRef = useRef(null);

    function lidaMovimentoMouse(e) {
        if(meioRef.current) {
            const rect = meioRef.current.getBoundingClientRect();

            const xRelativo = e.clientX - rect.left;
            const yRelativo = e.clientY - rect.top;

            setposicaoInfo({
                x: xRelativo - 20,
                y: yRelativo - 12,
            })
        }
    }

    function lidaEntradaMouse() {
        setInfoVisisel(true);
    }

    function lidaSaidaMouse() {
        setInfoVisisel(false);
    }

    return (
        <div className="pasta">
            <div className='fundo' style={{backgroundColor: corFundo}}>
                <div className='meio'
                     ref={meioRef}
                     onMouseMove={lidaMovimentoMouse}
                     onMouseEnter={lidaEntradaMouse}
                     onMouseLeave={lidaSaidaMouse}
                >
                    <div className='info' style={{
                        left: `${posicaoInfo.x}px`,
                        top: `${posicaoInfo.y}px`,
                        display: infoVisisel ? 'block' : 'none',
                    }}>
                        <a href={conteudo.link}
                           target='_blank' rel='noopener noreferrer'>
                            clique para ver mais
                        </a>
                    </div>

                    <p>{conteudo.titulo}</p>
                </div>
            </div>

            <div className='frente' style={{backgroundColor: corFrente}}></div>
        </div>

    )
}

export default Pasta;