const Regras = () => {

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3 px-2 text-center bg-dark text-light">
            <h2 className="display-5">Como Jogar:</h2>

            <div className="w-100 border border-secondary p-3 bg-body-tertiary text-start" style={{ maxWidth:'700px', fontFamily: "'VT323', monospace", fontSize: '1.5rem'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <button className="btn btn-secondary">Voltar</button>

        </div>
    )
}

export default Regras
