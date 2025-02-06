import { toPost } from "../service/api.service.js";
import { checkedLogged } from "../utils/checkLogged.js";
import handleFeedback from "../utils/feedbackAlert.js";

const formLogin =  document.getElementById('formLogin')
const stayConnected =  document.getElementById('stay-connected')

checkedLogged()


// navega para home
function goToHome (){
    setTimeout(function() {
        window.location.href = './home.html'
      },2000);
  }

// controla o submit do formulário.
formLogin.addEventListener('submit', function (e){
  e.preventDefault()
  
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const userLogin = ({email, password})
  login(userLogin)
  
})

// executa a função toPost e exibe o feedback
async function login (data) {
  try{
      const result = await toPost('user/login', data)
      handleFeedback(result)
 
      if(result.ok){
        saveOnStorage(result.data)
        goToHome()
      }
  }catch(error){
    console.error('Error:', error.message);
  }
}

// Persiste os dados do user
function saveOnStorage(data){

  const userData = JSON.stringify(data)

  if(stayConnected.checked){
    localStorage.setItem('logged', userData)
  }else{
    sessionStorage.setItem('logged', userData)
  }
}
