import { indexBikers, createBiker, showBiker, updateBiker, deleteBiker } from './api.js'
import { onFailure, onIndexBikerSuccess, onCreateBikerSuccess, onShowBikerSuccess, onUpdateBikerSuccess, onDeleteBikerSuccess } from './ui.js'


const createBikerForm = document.querySelector('#create-biker-form')
const indexBikerContainer = document.querySelector('#index-biker-container')
const showBikerContainer = document.querySelector('#show-biker-container')

indexBikers()
.then((res) => res.json())
.then(res => {
    console.log(res)
    onIndexBikerSuccess(res.bikers)
})
.catch(onFailure)


createBikerForm.addEventListener('submit', (event) => {
    event.preventDefault()

        const bikerData = {
                biker: {
                    firstName: event.target['firstName'].value,
                    lastName: event.target['lastName'].value,
                    miles: event.target['miles'].value,
                    class: event.target['class'].value,
                },
        }
        createBiker(bikerData)
                .then(onCreateBikerSuccess)
                .catch(onFailure)
})

indexBikerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    showBiker(id)
    .then((res) => res.json())
    .then((res) => onShowBikerSuccess(res.biker))
    .catch(onFailure)
})

showBikerContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const bikerData = {
		biker: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			class: event.target['class'].value,
			strength: event.target['miles'].value,
		}
    }

    updateBiker(bikerData, id)
		.then(onUpdateBikerSuccess)
		.catch(onFailure)
})

showBikerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    deleteBiker(id)
        .then(onDeleteBikerSuccess)
        .catch(onFailure)
})