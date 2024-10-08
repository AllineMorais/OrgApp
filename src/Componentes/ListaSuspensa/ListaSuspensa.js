import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return(
        <div className='listasuspensa'>
            <label>{props.label} </label>
                <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                </select>        
        </div>
    )

}

export default ListaSuspensa