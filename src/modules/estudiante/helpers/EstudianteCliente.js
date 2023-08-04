import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Matricula/estudiantes"

export const obtenerEstudianteFachada = async (cedula) => {

    return await obtenerEstudianteAPIAxios(cedula);

}

export const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudianteAPIAxios(bodyEstudiante)
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id)
}

export const eliminarEstudianteFachada = async (id) => {
    await eliminarEstudiante(id)
}



export const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
}

const obtenerEstudianteAPIAxios = async (cedula) => {
    const data = axios.get(url + "/" + cedula).then(r => r.data)
    return data

}
const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    axios.post(url, bodyEstudiante).then(r => r.data)
}
const actualizarEstudiante = (bodyEstudiante, id) => {
    axios.put(url + "/" + id, bodyEstudiante).then(r => r.data)
}
const eliminarEstudiante = async (id) => {
    axios.delete(url + "/" + id).then(r => r.data)
}