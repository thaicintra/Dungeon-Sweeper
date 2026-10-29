interface CabecalhoProps {
    titulo: string
}

const Cabecalho = ({ titulo }: CabecalhoProps) => {

    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    )
}

export default Cabecalho
