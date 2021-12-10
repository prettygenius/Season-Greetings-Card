const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")



   
  snowBtn.addEventListener('click', snowy)   
  
  function snowy()  {
       greeting.innerHTML = "☃️Let it Snow!"
       body.classList.add('snow')
  }
  
  christmasBtn.addEventListener('click', xmas)
  
  function xmas() {
      body.classList.remove('snow')
      body.classList.add('christmas')
      greeting.innerHTML = "🎅 Merry Christmas!"
  }
  
