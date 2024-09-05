import CampoTexto from '../CampoTexto/Index.js';

export const Formulario = () => {
    // JSX
    return (
        <section>
        <form>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Adicione o Caminho da imagem" />
        </form>
        </section>
    )
}