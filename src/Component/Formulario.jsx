// Llenamos informacion


const Formulario = ({Name, setName, LastName, setLastName}) => {
    
    return (
        <div>
            <form>
                <label>First name:</label>
                <br/>
                <input type="text" value={Name} onChange={ (e) => setName(e.target.value) }/>
                <br/>
                <label>Last name:</label>
                <br/>
                <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                <br/>
                <br/>
            </form>
        </div>
    )

}

export default Formulario