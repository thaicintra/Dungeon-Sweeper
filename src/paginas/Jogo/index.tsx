import Tabuleiro from "../../componentes/Tabuleiro"
import PainelMensagens from "../../componentes/PainelMensagens"
import Rodape from "../../componentes/Rodape"
import Cabecalho from "../../componentes/Cabecalho"

const Jogo = () => {

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3 px-2 text-center bg-dark text-light">
            <div className="w-100 border border-secondary p-3 d-flex flex-column gap-3 rounded shadow-lg"
                style={{ maxWidth: '900px' }}>
                <Cabecalho />
                <Tabuleiro />
                <PainelMensagens />
                <Rodape />
            </div>
        </div>
    )
}

export default Jogo
