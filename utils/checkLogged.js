export function checkedLogged (){
    const logged = localStorage.getItem("logged");

  if(logged){
     window.location.href = './home.html'
  }
}



export function getUserLogged () {
  let userlogged = sessionStorage.getItem("logged")

  if(userlogged) {
   return JSON.parse(userlogged)
   }

  userlogged = localStorage.getItem("logged")
  
  if(userlogged) {
     return JSON.parse(userlogged)    
  }

   window.location.href = './login.html'
} 