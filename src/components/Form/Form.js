import React from 'react';
import './Form.css';
import {useState, useEffect} from 'react'

const Form = ({listaPa, setListaPa, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  const [okey, setOkey] = useState(false);

  useEffect(()=>{
    if (Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setError(false)
      setOkey(false)}
  },[paciente])


  const generarID=()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
    
  }


  



  const handleSubmit =(e)=>{
    e.preventDefault();
    //Validacion del form
    if ([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      setOkey(false)
    } else {
      setError(false)
      setOkey(true)}
      //guardo los valores en la funcion q viene desde app.js

      //objeto de paciente
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
      }


      if (paciente.id) {

        objetoPaciente.id = paciente.id
        const listaAct = listaPa.map(element => element.id === paciente.id ? objetoPaciente : element)
        setListaPa(listaAct)
        setPaciente({})
        

      } else {

        objetoPaciente.id = generarID();
        setListaPa([...listaPa, objetoPaciente]);
        setPaciente({})

      }

      //vuelvo a 0 todos los campos
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')

      

  }

  
 


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h1 className='font-black text-3xl text-center'>Seguimiento Pacientes</h1>
      <p className='text-lg mt-5 text-center mb-5'>
        Agrega pacientes y {''}
      <span className='text-indigo-600 font-bold'>administralos</span>
      </p>
      <form onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-xl py-5 px-5 m-5'>

        

        {error && 
        <div className='text-center mb-4 bg-red-800 text-white p-2 rounded-md'>
        <p className='mt-1'>Todos los campos deben completarse</p>
        </div>
        }

        {okey && 
        <div className='text-center mb-4 bg-green-800 text-white p-2 rounded-md'>
        <p className='mt-1'>Mascota agregada correctamente!</p>
        </div>
        }

      

        <div className='mb-5'>
        <label htmlFor='mascota' className='block uppercase font-bold'>Nombre mascota</label>
        <input
          id='mascota'
          type="text"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          placeholder='Nombre mascota'
          className='border-2 p-1 w-full mt-1 rounded-md placeholder-gray-500'
        />
        </div>

        <div className='mb-5'>
        <label htmlFor='propietario' className='block uppercase font-bold'>Nombre propietario</label>
        <input
          id='propietario'
          type="text"
          value={propietario}
          onChange={(e)=>setPropietario(e.target.value)}
          placeholder='Nombre propietario'
          className='border-2 p-1 w-full mt-1 rounded-md placeholder-gray-500'
        />
        </div>

        <div className='mb-5'>
        <label htmlFor='email' className='block uppercase font-bold'>Email propietario</label>
        <input
          id='email'
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Email propietario'
          className='border-2 p-1 w-full mt-1 rounded-md placeholder-gray-500'
        />
        </div>

        <div className='mb-5'>
        <label htmlFor='alta' className='block uppercase font-bold'>Fecha de alta</label>
        <input
          id='alta'
          type="date"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
          className='border-2 p-1 w-full mt-1 rounded-md placeholder-gray-500'
        />
        </div>

        <div className='mb-5'>
        <label htmlFor='sintomas' className='block uppercase font-bold'>Sintomas</label>
        <textarea id='sintomas' 
        value={sintomas}
        onChange={(e)=>setSintomas(e.target.value)}
        className='border-2 p-1 w-full mt-1 rounded-md placeholder-gray-500'
        placeholder='Describa los sintomas de su amiguito'
        />
        </div>

        <input
        type="submit"
        value='Agregar / Editar'
        className='w-full mt-1 
        rounded-md 
        placeholder-gray-500 
        bg-indigo-600 
        text-cyan-50 
        p-2 
        uppercase 
        font-bold
        hover:bg-indigo-700
        cursor-pointer
        transition-all'
        />
        

      </form>

    </div>
  )
}

export default Form