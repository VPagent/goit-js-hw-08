
import  throttle  from 'lodash.throttle';
const form = document.querySelector(".feedback-form")



window.addEventListener("load", onLoaded)

const obj = {}

function onLoaded(event){
    if(localStorage.getItem("feedback-form-state")){
        const newObj = JSON.parse(localStorage.getItem("feedback-form-state"))
        form[0].value = newObj.email
        form[1].value = newObj.message
    }    
}

form.addEventListener("input", throttle(valueForm, 500))

function valueForm (event) {
    event.preventDefault()
    obj[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

form.addEventListener("submit", onSubmForm)

function onSubmForm(event){
    event.preventDefault()
    console.log(obj)
    form.reset()
}



