export const indexBikers = () => {
    return fetch(`http://localhost:8000/bikers`)
}

export const createBiker = (data) => {
    return fetch(`http://localhost:8000/bikers`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}   

export const showBiker = (id) => {
    return fetch(`http://localhost:8000/bikers/${id}`)
}

export const updateBiker = (data, id) => {
    return fetch(`http://localhost:8000/bikers/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const deleteBiker = (id) => {
    return fetch(`http://localhost:8000/biker/${id}`,{
        method: 'DELETE'
    })
}
