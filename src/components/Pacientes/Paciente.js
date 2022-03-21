const Paciente = ({paciente}) => {
  console.log(paciente)
  return (
   
      <div className='m-5 bg-white shadow-md py-5 px-5 rounded-xl'>
        <p className='font-bold uppercase mb-5'> Nombre: {' '}
          <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold uppercase mb-5'> Propietario: {' '}
          <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>
        <p className='font-bold uppercase mb-5'> Email: {' '}
          <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold uppercase mb-5'> Fecha alta: {' '}
          <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>
        <p className='font-bold uppercase'> Sintomas: {' '}
          <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between flex-wrap">
          <button 
          type="button"
          className="py-2 px-8 mt-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
          
          >
            Editar
          </button>
          <button 
          type="button"
          className="py-2 px-10 mt-4 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md"
          >
            Eliminar
          </button>
        </div>

        </div>
  )
}

export default Paciente