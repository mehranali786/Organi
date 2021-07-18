var navLinks = document.getElementById("navLinks");
    
function showMenu(){
    navLinks.style.left = "0px";
}
function hideMenu(){
    navLinks.style.left = "-300px";
}

var sidebar = document.getElementById("sideBar");
    function openMenu(){
        sidebar.style.display = "block";
    }
    function closeMenu(){
        sidebar.style.display = "none"
    }