import axios from "axios"
const url = "http://localhost:8080/API/v1.0/Matricula/estudiantes"
const token="eyJSb2wiOiJTYXBvIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBbnRvbnkiLCJpYXQiOjE2OTI4NDUyNDQsImV4cCI6MTY5Mjg0NjI0NH0.yhHZ-vRQS0jSIdaTNiJnFephdJNgZLcuz9v0JOlnpGnj9Tejo-9Gcr1yZk6PV_36dFI7OFxvB3k6QBSE-niISw"

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