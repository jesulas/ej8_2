type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let resultado: Pacientes[] = [];
   
    function checkPediatria(espec){
      return espec.especialidad === "Pediatra"
    }
    

    resultado = pacientes.filter(checkPediatria)
    
   return resultado;
  };

  const ej1 = obtenPacientesAsignadosAPediatria(pacientes);
console.log(ej1);

  const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let resultado: Pacientes[] = [];
   
    function checkPediatria(espec){
    if (espec.edad < 10){
      return espec.especialidad === "Pediatra"
    }}

    

    resultado = pacientes.filter(checkPediatria)
    
   return resultado;
    
};

const ej2 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(ej2);


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  function checkProtocolo(espec){
    if (espec.frecuenciaCardiaca > 100 && espec.temperatura > 39){
      return true
    }
    return false
  }
  activarProctolo = pacientes.some(checkProtocolo);

  return activarProctolo;
};

const ej3 = activarProtocoloUrgencia(pacientes);
console.log(ej3);

  
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacientesPediatria = false;

  function checkPacientes(espec){
    if (espec.especialidad === "Pediatria"){
      return true
    }
    return false
  }
  pacientesPediatria = pacientes.some(checkPacientes);

  return pacientesPediatria;
};

const ej4 = HayPacientesDePediatria(pacientes);
console.log(ej4);

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

  
  return pacientes.reduce((acc, paciente) => {
    if (paciente.especialidad === 'Medico de familia') {
    acc.medicoDeFamilia++
   }
   if (paciente.especialidad === 'Pediatra') {
    acc.pediatria++
   }
   if (paciente.especialidad === 'Cardiólogo') {
    acc.cardiologia++
   }
   return acc;
   }, {medicoDeFamilia: 0, pediatria: 0, cardiologia: 0})

};

const ej5 = cuentaPacientesPorEspecialidad(pacientes);
console.log(ej5);