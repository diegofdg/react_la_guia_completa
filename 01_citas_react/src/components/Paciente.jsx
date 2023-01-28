const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mt-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mt-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mt-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mt-3 text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">28 de Enero de 2023</span>
      </p>
      <p className="font-bold mt-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae saepe? Repudiandae itaque libero vitae at eaque iusto, ut voluptatum quos amet inventore voluptatibus nostrum ea tempora maiores sit dolores.</span>
      </p>
      </div>
  )
}

export default Paciente