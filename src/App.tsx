import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"
import Jogo from "./paginas/Jogo"

const App = () => {

    return (
        <div>
            <Cabecalho titulo="Dungeon Sweeper" />
            <Jogo />
            <Rodape />
        </div>
    )
}

export default App
