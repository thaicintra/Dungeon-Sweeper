import Celula from "../Celula"

const Tabuleiro = () => {

    const COLUNAS = 30;
    const LINHAS = 16;
    const TOTAL_CELULAS = COLUNAS * LINHAS
    
    return (
        <div className="border border-secondary pt-2 px-2 pb-3 my-2 bg-black bg-opacity-25 rounded overflow-x-auto">
            <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                <small className="text-secondary" >
                    [ TABULEIRO - {COLUNAS}x{LINHAS} ]
                </small>
                <small className="text-danger" style={{ fontFamily: "'VT323', monospace", fontSize: '1.8rem'}}>Inimigos: 45</small>
            </div>

            <div className="d-grid gap-1 mx-auto" style={{ gridTemplateColumns: `repeat(${COLUNAS}, minmax(0, 1fr)`, maxWidth: '800px', width: '100%' }}>
                {Array.from({ length: TOTAL_CELULAS }).map((_, index) => (<Celula key={index} />))}
            </div>
        </div>    
    )
}

export default Tabuleiro
