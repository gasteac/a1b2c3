const Paciente = ({paciente, setPaciente, eliminarPa}) => {

const handleDelete = () =>{
    if (window.confirm('Deseas eliminar este paciente?') === true){
      eliminarPa(paciente.id)
    } 
}

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
        <p className='font-bold uppercase mb-5'> Sintomas: {' '}
          <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>
        <p className='font-bold uppercase text-gray-400'> id Paciente: {' '}
          <span className='font-normal normal-case'>{paciente.id}</span>
        </p>

        <div className="flex justify-between flex-wrap">
          <button 
          type="button"
          className="py-2 px-8 mt-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
          onClick={()=>setPaciente(paciente)}
          >
            Editar
          </button>
          <button 
          type="button"
          className="py-2 px-10 mt-4 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md"
          onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>

        </div>
  )
}

export default Paciente