const Child = (props) => {
    return ( 
        <div>
            THis is Child component
            <input value={props.name} onChange={(e)=> props.handleChange(e.target.value)} />
        </div>
     );
}
 
export default Child;