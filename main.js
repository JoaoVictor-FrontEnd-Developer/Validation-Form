const firstName = document.querySelector("#input-name");
const lastName = document.querySelector("#input-last-name");
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");;
const form = document.querySelector("#formulario")

const button = document.querySelector("#input-button");

const inputs = form.childNodes;


function inputVerify(item) {
    return item.value.trim().length > 0;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  
button.addEventListener("click", () => {

    for (const input of inputs) {
        if (!inputVerify(input)) {
            input.classList.remove("correct");
            input.classList.add("error")

            if (input.getAttribute("name") == 'E-mail') {
                input.setAttribute("placeholder", `email@example.com`)
            } else {
                input.setAttribute("placeholder", `${input.getAttribute("name")} canot be empty`)
            }
            
        } else {
    
            if (input.getAttribute("name") == 'E-mail') { 
                if (!validateEmail(input.value)) {
                    input.classList.remove("correct");
                    input.classList.add("error");
                    input.setAttribute("placeholder", `email@example.com`)
                } else {
                    input.classList.add("correct");
                }   
            } else input.classList.add("correct");
        }
    }
      
})


const inputChanged = (input) => {
    if (inputVerify(input)) {
        input.classList.remove("error")
    }
}

firstName.addEventListener("change", () => inputChanged(firstName))
lastName.addEventListener("change", () => inputChanged(lastName))
email.addEventListener("change", () => inputChanged(email))
password.addEventListener("change", () => inputChanged(password))