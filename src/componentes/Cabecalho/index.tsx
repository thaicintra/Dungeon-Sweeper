import BarraHp from "../BarraHp"

const Cabecalho = () => {

    return (
        <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-secondary">
            <div className="d-flex align-items-center gap-2">
                <span className="fw-bold fs-5">Andar 3</span>
                <span className="badge bg-danger text-uppercase font-monospace">Difícil</span>
            </div>
            <BarraHp />
        </div> 
    )
}

export default Cabecalho
