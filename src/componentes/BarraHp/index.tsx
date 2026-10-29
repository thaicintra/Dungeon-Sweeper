const BarraHp = () => {

    return (
        <div className="d-flex align-items-center gap-2">
            <span className="fw-bold">HP</span>
            
            <div className="progress" style={{ width: '100px', height:'16px'}}>
                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%'}}></div>
            </div>
            <small style={{fontFamily: "'VT323', monospace", fontSize: '1.5rem'}}>15/20</small>
        </div>
    )
}

export default BarraHp
