const indexBikerContainer = document.querySelector('#index-biker-container')
const messageContainer = document.querySelector('#message-container') 
const showBikerContainer = document.querySelector('#show-biker-container')


export const onIndexBikerSuccess = (bikers) => {
    bikers.forEach((biker) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${biker.firstName} ${biker.lastName}</h3>
        <button data-id="${biker._id}">Show Biker</button>
        `
        indexBikerContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You've encountered an error. Try again later</h3>
    <p>${error}</p>`
}

export const onCreateBikerSuccess = () => {
    messageContainer.innerText = 'You have created a charcter'
}

export const onShowBikerSuccess = (biker) => {
	const div = document.createElement('div')
	div.innerHTML = `
        <h3>${biker.firstName} ${biker.lastName}</h3>
        <p>${biker.class}</p>
        <p>${biker.miles}</p>
        <p>${biker._id}</p>

        <form data-id="${biker._id}">
            <input type="text" name="firstName" value="${biker.firstName}">
            <input type="text" name="lastName" value="${biker.lastName}">
            <input type="text" name="class" value="${biker.class}">
            <input type="number" name="miles" value="${biker.miles}">
            <input type="submit" value="Update Biker">
        </form>
    `
	showBikerContainer.appendChild(div)
}

export const onUpdateBikerSuccess = () => {
    messageContainer.innerText = 'Update was successful'
}

export const onDeleteBikerSuccess = () => {
    messageContainer.innerText = 'Delete was successful'
}