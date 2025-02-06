// criar um alert feedback
const feedBackToastEl = document.getElementById("feedback-toast-register");
const feedBackToast = new bootstrap.Toast(feedBackToastEl);

//modica o alerta para sucesso
function feedBackSuccess(message) {
  feedBackToastEl.classList.remove("text-bg-danger");
  feedBackToastEl.classList.add("text-bg-success");
  feedBackToastEl.innerHTML = message
  feedBackToast.show();
}

//modifica o alerta para erro
function feedBackError (message) {
feedBackToastEl.classList.remove("text-bg-success");
feedBackToastEl.classList.add("text-bg-danger");
feedBackToastEl.innerHTML = message
feedBackToast.show();
}

//Exibe alerta
function handleFeedback(data) {
    if(data.ok){
      feedBackSuccess(data.message)
    }else{
      feedBackError(data.message)
    }
}

export default handleFeedback