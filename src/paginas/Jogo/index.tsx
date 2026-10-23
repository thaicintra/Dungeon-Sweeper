import BarraHp from "../../componentes/BarraHp"
import Tabuleiro from "../../componentes/Tabuleiro"
import PainelMensagens from "../../componentes/PainelMensagens"

const Jogo = () => {

    return (
        <div>
            <p>Jogo: tela principal, onde a partida acontece. Reúne a barra de HP, o tabuleiro e o painel de mensagens.</p>
            <BarraHp />
            <Tabuleiro />
            <PainelMensagens />
        </div>
    )
}

export default Jogo
