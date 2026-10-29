const FimDeJogo = () => {

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3 px-2 text-center bg-dark text-light">
            <div className="w-100 border border-danger p-4 d-flex flex-column gap-3" style={{ maxWidth: '500px' }}>
                <h2 className="display-6 text-danger fw-bold">GAME OVER</h2>

                <div className="my-2">
                    <p className="fs-5 mb-1">Andar: 3</p>
                    <p className="fs-5 text-secondary">Recorde: 5</p>
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-outline-light">Nova Partida</button>
                    <button className="btn btn-outline-secondary">Menu</button>
                </div>
            </div>
            
        </div>
    )
}

export default FimDeJogo
