const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const LOCAL_STORAGE_KEY = "feedback-form-state";

updateOutput()
form.addEventListener("submit", saveMessage);

function saveMessage (){
    localStorage.setItem(LOCAL_STORAGE_KEY, form.email.value);
    localStorage.getItem(LOCAL_STORAGE_KEY, form.message.value)
    form.reset();
}

function updateOutput(){
   const savedText = localStorage.getItem(LOCAL_STORAGE_KEY);
   if(!savedText){
    return
   }
   updateOutput(savedText)
}