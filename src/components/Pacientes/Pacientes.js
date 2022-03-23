import React from 'react';
import './Pacientes.css';
import Paciente from './Paciente';

const Paci = ({listaPa, setPaciente, eliminarPa}) => {
  return (
    <>
      <div className='md:w-1/2 lg:w-3/5'>
        {listaPa && listaPa.length ? (
          <>
          <h1 className='font-black text-3xl text-center'>Total Pacientes:{" "+listaPa.length}</h1>
          <p className='text-lg mt-5 text-center mb-5'>
            Administra tus {''}
          <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>
        <div className='md:h-screen md:overflow-y-scroll'>
        {listaPa.map((p)=>(
          <Paciente 
          key={p.id}
          paciente={p}
          setPaciente={setPaciente}
          eliminarPa={eliminarPa}
          />
        ))}
        </div>
        </>
        ) : (
          <>
        <h1 className='font-black text-3xl text-center'>No hay pacientes.</h1>
        <p className='text-lg mt-5 text-center mb-5'>
            Agrega pacientes {''}
          <span className='text-indigo-600 font-bold'>y apareceran aqui</span>
          </p>
        </>
        )}
      
    </div>
    </>
  )
}

export default Paci;