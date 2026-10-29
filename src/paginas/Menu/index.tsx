const Menu = () => {

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3 px-2 text-center bg-dark text-light">
            <h1 className="display-5">Dungeon Sweeper</h1>

            <div>
                <p>Dificuldade:</p>
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    <button className="btn btn-outline-light">Fácil</button>
                    <button className="btn btn-outline-light">Normal</button>
                    <button className="btn btn-outline-light">Difícil</button>
                </div>
            </div>

            <button className="btn btn-primary">Nova Partida</button>
            <button className="btn btn-secondary">Ver Regras</button>

            <p className="text-secondary">Recorde: andar 0</p>
        </div>
    )
}

export default Menu
