import FimDeJogo from "./paginas/FimDeJogo"
import Jogo from "./paginas/Jogo"
import Menu from "./paginas/Menu"
import Regras from "./paginas/Regras"

const App = () => {

    return (
        <div>
            <Menu />
            <Regras />
            <FimDeJogo />
            <Jogo />
        </div>
    )
}

export default App
