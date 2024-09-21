import Botao from '../Botao/Botao.js';
import CampoTexto from '../CampoTexto/Index.js';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js';
import { useState } from 'react';

export const Formulario = (props) => {
    // JSX
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão' 
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )
       // console.log('Form foi submetid => ', nome, cargo, imagem, time)
    }

    return (
        <section>
        <form onSubmit={aoSalvar}>
            <CampoTexto label="Nome" 
                placeholder="Digite seu nome" 
                obrigatorio={true} 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}/>
            
            <CampoTexto 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                obrigatorio={true} 
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}/>
            
            <CampoTexto 
                label="Imagem" 
                placeholder="Adicione o Caminho da imagem" 
                obrigatorio={true}  
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)}/>


            <ListaSuspensa 
                itens={times}
                valor={time} 
                aoAlterado={valor => setTime(valor)}/>
            <Botao>Criar Card</Botao>
        </form>
        </section>
    )
}