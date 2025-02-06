import { toFormatReal } from "./toFormatReal.js"

const tableList = document.getElementById('table-list')
const emptyTransaction = document.getElementById('empty-transaction')

// cria a tabela
  function createTable(data) {

    let listTransactionHtml = `
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Apagar</th>
        </tr>
      </thead>
`
    data.map((transaction, index) => {
    listTransactionHtml += `
    <tbody id="body-table">
      <tr>
        <th class="m-1" scope="row">${index + 1}</th>
        <td class="m-1">${transaction.title}</td>
        <td class="m-1">${toFormatReal(transaction.value)}</td>
        <td class="m-1">${transaction.type}</td>
        <td>
        <button type="button" class="btn btn-outline-danger" id="delete-button" onclick="deleteTransaction('${transaction.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </button>
        </td>
      </tr>            
    </tbody>
  `
    tableList.innerHTML = listTransactionHtml

  })
}
// controla a exibição da tabela
export function handleTable(data){ 
  
  tableList.innerHTML = ''
  emptyTransaction.innerHTML = ''

  if(data.length < 1){    
      return emptyTransaction.innerHTML = 'Nenhuma transação encontrada!'
    }

   createTable(data)
   
}

  

  

