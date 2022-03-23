import Header from './components/Header/Header';
import Paci from './components/Pacientes/Pacientes';
import Form from './components/Form/Form';
import { useEffect, useState} from 'react';

function App() {
  const [listaPa, setListaPa] = useState([])
  const [paciente, setPaciente] = useState({})


  useEffect(()=>{
    const obtenerSR = () => {
      const pacientesSR = JSON.parse(localStorage.getItem('listaPa')) ?? [];
      setListaPa(pacientesSR)
    }
    obtenerSR();
  },[])

  useEffect(()=>{
    localStorage.setItem('listaPa', JSON.stringify(listaPa))

  },[listaPa])

  
  const eliminarPa = id => {
    const pacientesAct = listaPa.filter(pacie => pacie.id !== id)
    setListaPa(pacientesAct)
  }

  return (
    <div className='container mx-20 mt-10'>
    <Header/>
    <div className='mt-12 md:flex  mb-10'>
    <Form 
    listaPa={listaPa}
    setListaPa={setListaPa}
    paciente={paciente}
    setPaciente={setPaciente}
    />
    <Paci 
    eliminarPa={eliminarPa}
    listaPa={listaPa}
    setPaciente={setPaciente}
    />
    </div>
    </div>
  );
}

export default App;
