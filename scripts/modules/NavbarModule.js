const NavbarModule = (() => {
  const navbar = `
     <nav class="bg-dark navbar navbar-dark navbar-expand-lg shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Army of Dragostea din Tei</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="gathering-army.html"
                >Shop</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="your-army.html">Your army</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="getting-resources.html"
                >Getting resources</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

  const navbarContainer = document.getElementById("navbar-container");

  navbarContainer.innerHTML = navbar;
})();
