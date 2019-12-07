let locate = () =>{
    let where = document.getElementById("location");
    where.style.display = "none";
    where.textContent = "start";
    
}

//will be on change in future
window.addEventListener("load", locate, false);