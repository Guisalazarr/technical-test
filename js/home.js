import { toGet, toPost } from "../service/api.service.js";
import { handleTable} from "../utils/createTable.js";
import { handleCard } from "../utils/handleCard.js";
import handleFeedback from "../utils/feedbackAlert.js";
import { getUserLogged } from "../utils/checkLogged.js";


const user = getUserLogged()
const id = user.id
const token = user.token
console.log(token)
document.getElementById('name-user').innerText= user.name
listTransaction()

const search = document.getElementById('search')


// Desloga o usuário
document.getElementById('button-exit').addEventListener('click', () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.href = './login.html'
})

// executa a função search
search.addEventListener('change', () => {
  const input = search.value
    if(!input.length){
      return listTransaction()    
    }
    toSearch(input)
})


// Captura os dados do form e executa createTransaction
document.getElementById("transacion-form").addEventListener("submit", async (e)  => {
  e.preventDefault()

  const title = document.getElementById("title").value
  const value = document.getElementById("value").value;
  const type = document.querySelector ('input[name="type-input"]:checked').value;
  
  const transacion = {title, value, type}
  createTransaction(transacion)
  e.target.reset()

});

// Executa a função toGet
async function listTransaction () {
  try{
    const result = await toGet(`user/${id}/transaction`, token)

    if(!result.ok){
      return new error(result.message)
    }

    const balance = result.data.balance
    handleCard(balance)

    const transactions = result.data.transactions
    handleTable(transactions)
    
  }catch(error){
    console.error('Error:', error.message);
  }
}

// Filtra transações por titulo
async function toSearch(search) {
  try{

    const result = await toGet(`user/${id}/transaction?title=${search}`, token)
  
    const transactions = result.data.transactions
    handleTable(transactions)

  }catch(error){
    console.error('Error:', error.message);
  }
  
}

// Executa o metodo to POST par criar a transação
async function createTransaction (data) {
  try{
    const result = await toPost(`user/${id}/transaction`, data, token)
    handleFeedback(result)

    if(result.ok){
      setTimeout(function() {
        window.location.href = './home.html'
      },2000);
    }

}catch(error){
  console.error('Error:', error.message);
}
}






