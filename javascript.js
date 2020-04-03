function affichageMenu() {
    const menu = document.createElement("nav")
    //A mettre en forme
    menu.innerHTML = `
    
    <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="index.html">
    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    M is photographing
  </a>
  <ul class="nav justify-content-end">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">PHOTOS</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="ecosse.html">Écosse</a>
      <a class="dropdown-item" href="saintMalo.html">Saint Malo</a>
      <a class="dropdown-item" href="vegetaux.html">Végétaux</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">À PROPOS</a>
  </li>
</ul>
</nav>
    `
  
    var body = document.getElementById("container").parentNode
    var container = document.getElementById("container")
    body.insertBefore(menu, container)
  }