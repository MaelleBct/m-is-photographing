function affichageMenu() {
    const menu = document.createElement("nav")
    //A mettre en forme
    menu.innerHTML = `<div class="menu"><p>MENU</p></div>`
  
    var body = document.getElementById("container").parentNode
    var container = document.getElementById("container")
    body.insertBefore(menu, container)
    console.log(body)
  }