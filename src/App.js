import './App.css';
import Header from './components/Header/Header';
import Paci from './components/Pacientes/Pacientes';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const [listaPa, setListaPa] = useState([])
  return (
    <div className='container mx-auto mt-10'>
    <Header/>
    <div className='mt-12 md:flex  mb-10'>
    <Form 
    listaPa={listaPa}
    setListaPa={setListaPa}
    />
    <Paci listaPa={listaPa}/>
    </div>
    </div>
  );
}

export default App;
