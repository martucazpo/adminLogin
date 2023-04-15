


const TextInput = (props) =>{
    return (
        <>
            <label htmlFor={props.name}>{props.labelTxt}</label>
            <input type="text" name={props.name} value={props.value} onChange={(e)=>props.handleChange(e.target)} required={props.required} id={props.name} />
        </>
    )
}

export default TextInput