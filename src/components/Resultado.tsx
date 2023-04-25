import { ResultCtx } from "../Context/ContextResultado";
// import { useState } from "react";

const  Resultado = (props:any)=>{
    // const [result, setResult] = useState(0)
    const {result} = ResultCtx();

    return (<>
    <p>Serie({props.n}): {result(props.n)}</p>
    </>)
} 

export default Resultado ;