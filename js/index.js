import {toPost } from "../service/api.service.js";
import { checkedLogged } from "../utils/checkLogged.js";
import handleFeedback from "../utils/feedbackAlert.js";

const formRegister = document.getElementById('formRegister')

checkedLogged()

// navega para login
function goToLogin (){
    setTimeout(function() {
        window.location.href = './login.html'
      },2000);
  }

// controla o submit do formulário.
formRegister.addEventListener('submit', function (event){
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const repeatPassword = document.getElementById(
    "repeatPassword"
  ).value

  if(password != repeatPassword) {
    return handleFeedback({
      ok: false,
      message: 'Senhas divergentes'
    })
  }

  const user = ({name, email, password, repeatPassword})
  register(user)

})

// executa a função toPost e exibe o feedback
async function register (data) {
  try{
      const result = await toPost('user/', data)
      handleFeedback(result)
 
      if(result.ok){
        goToLogin()
      }
  }catch(error){
    console.error('Error:', error.message);
  }
}





