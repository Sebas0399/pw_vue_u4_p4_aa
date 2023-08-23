import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Matricula/estudiantes"
const token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBbnRvbnkiLCJpYXQiOjE2OTI3NTA2NjQsImV4cCI6MTY5Mjc1MTY2NH0.ApCgIlJt1x6sZ9RYFxb78gzHZKmKdKTV3vdKSaVeR8D8S_cltT_LW597L87IPI6wy6tXU0BITtbY0Vm2XJIf4A"

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
    const headers={
        "Authorization":"Bearer "+token ,
        "Mensaje":"Valor1"
    }
    const data = axios.get(url + "/" + cedula,{headers:headers}).then(r => r.data)
    return data

}
const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    const headers={
        "Authorization":"Bearer "+token ,
        "Mensaje":"Valor1"
    }
    axios.post(url, bodyEstudiante,{headers:headers}).then(r => r.data)
}
const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers={
        "Authorization":"Bearer "+token ,
        "Mensaje":"Valor1"
    }
    axios.put(url + "/" + id, bodyEstudiante,{headers:headers}).then(r => r.data)
}
const eliminarEstudiante = async (id) => {
    const headers={
        "Authorization":"Bearer "+token ,
        "Mensaje":"Valor1"
    }
    axios.delete(url + "/" + id,{headers:headers}).then(r => r.data)
}