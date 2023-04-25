import Formulario from './components/Formulario';
import './App.css'
import { ResultContextProvider } from './Context/ContextResultado';

function App() {


  return (
    <ResultContextProvider>
      <main>
     <Formulario/>
    </main>
    </ResultContextProvider>
  )
}

export default App
