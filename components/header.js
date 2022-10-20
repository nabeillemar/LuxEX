class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
    <style>
    /* Style the top navigation bar */
    .navbar {
    overflow: hidden;
    background-color: #333;
    }
  
    /* Style the navigation bar links */
    .navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px; 
    text-decoration: none;
    }
  
    /* Right-aligned link */
    .navbar a.right {
    float: right;
    }
  
    /* Change color on hover */
    .navbar a:hover {
    /*background-color: rgb(93, 194, 11);*/

    }
    </style>
    
    <header>
      <div class="navbar">
      <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
      <a href="about.html"><i class="fa-solid fa-school-flag"></i>  About </a>
      <a href="contact-us.html"><i class="fa-solid fa-envelope"></i> Contact </a> 
      <a href="#" class="right">Link</a>
     </div>
    </header>
  `;
}

}

customElements.define('header-component', Header);