const form = document.querySelector(".feedback-form");

const LOCAL_STORAGE_KEY = "feedback-form-state";

let data = {}

const collectData = () => {
    try{
        let formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(!formData){
            return
        }
        data = formData;
        form.email.value = data.email;
        form.message.value = data.message;
    }
    catch (error){
        console.log(error.message);
    }
}

const autofillData = (event) => {
    data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    data[event.target.value] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

const onFormSubmit = (event) => {
    event.preventDefault();
    event.target.reset;
    localStorage.removeItem(LOCAL_STORAGE_KEY);

}

collectData();

form.addEventListener('submit', onFormSubmit)