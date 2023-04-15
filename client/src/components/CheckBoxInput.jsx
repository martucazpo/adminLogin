const CheckBoxInput = (props) =>{
    return (
        <>
            <label htmlFor={props.name}>{props.labelTxt}</label>
            <input type="checkbox" name={props.name} checked={props.checked} onChange={(e)=>props.handleChange(e.target)} required={props.required} id={props.name} />
        </>
    )
}

export default CheckBoxInput