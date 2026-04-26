import './frontend/style.css';
import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const confirmPassword = document.querySelector('.confirm-password') as HTMLInputElement;

form.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, confirmPassword);
    checkEmail(email);
    checkEqualPasswords (password, confirmPassword);
    if (showIdSendForm(this)) console.log('Formulário enviado');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
    })
}

function checkEmail(input: HTMLInputElement) : void{
    if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(password: HTMLInputElement, confirmPassword: HTMLInputElement): void {
    if (password.value !== confirmPassword.value) {
        showErrorMessage(confirmPassword, 'As senhas não coincidem');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement  as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        '.error-message'
    ) as HTMLSpanElement;
    errorMessage.textContent = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function showIdSendForm(form: HTMLFormElement) : boolean {
    let send: boolean = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => send = false);
    return send;
}