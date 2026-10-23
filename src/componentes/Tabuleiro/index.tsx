import Celula from "../Celula"

const Tabuleiro = () => {

    return (
        <div>
            <p>Tabuleiro: grade do campo minado, formada por várias células. Será usado na tela de jogo.</p>
            <Celula />
            <Celula />
        </div>
    )
}

export default Tabuleiro
