interface CabecalhoProps {
    titulo: string
}

const Cabecalho = ({ titulo }: CabecalhoProps) => {

    return (
        <header>
            <h1>{titulo}</h1>
            <p>Cabeçalho: topo comum a todas as telas, com o título do jogo e o recorde.</p>
        </header>
    )
}

export default Cabecalho
