
import  throttle  from 'lodash.throttle';
const form = document.querySelector(".feedback-form")


let obj = {}
onLoaded()
function onLoaded(event){
    if(!localStorage.getItem("feedback-form-state")){
       return
    }   
    obj = JSON.parse(localStorage.getItem("feedback-form-state"))
    if(obj.email){
        form[0].value = obj.email
    }
    if(obj.message){
        form[1].value = obj.message
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



