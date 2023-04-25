import { useState } from "react";
import { useFormik } from "formik";
import Resultado from "./Resultado";


const Formulario = ()=> {
    const [number, setNumber] = useState(0);


    const handleSubmit = (values:any) => {
        setNumber(values.n)
    }

    const formik = useFormik({
		initialValues: {
			n: 0,
		},
		onSubmit: handleSubmit,
        
	})

    return (<>
        <form className="formulario" onSubmit={formik.handleSubmit}>
            <label htmlFor="n">Número de entrada</label>
            <input name="n" id="n" type="text" placeholder="Ingresa un número" value={formik.values.n} onChange={formik.handleChange}/>
            <button type="submit">Enviar</button>
        </form>

        <Resultado n={number}/>

    </>);
} 

export default Formulario;