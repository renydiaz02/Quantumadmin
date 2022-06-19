import Formulario from './Component/Formulario'
import Informacion from './Component/Informacion'
import { useState, useEffect } from 'react'
import FormProducts from './Component/FormProducts'

const producto = {

    "IDProducto": 1,
    "Descripcion": " ",
    "CantidadRestante": 0,
    "Costo": 0,
    "Precio": 0,
    "Descuento": 0,
    "QRCode": " ",
    "FechaCreacion": "2022-06-11T09:23:45.000Z",
    "FechaModificacion": "2022-06-11T09:23:45.000Z",
    "Estatus": null,
    "Imagenes": {}

} //JSON

let IDProducto = 0
let Descripcion = ""
let CantidadRestante = 0
let Costo = 0
let Precio = 0
let Descuento = 0
let QRCode = ""
let FechaCreacion = new Date()
let FechaModificacion = new Date()
let Estatus = null
let Imagenes = {}

const App = () => {
    

    //Aqui se guarda la informacion
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    return (
        <div>
            {/* El formulario llena la informacion */}
            {/* <Formulario Name={nombre} setName={setNombre} LastName={apellido} setLastName= {setApellido}/> */}
            {/* Informacion muestra la informacion */}
            {/* <Informacion Name={nombre} LastName={apellido}/> */}


            <FormProducts/>
            
        </div>

    )
} 

 export default App