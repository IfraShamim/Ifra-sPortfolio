const menuToggle = () =>{
    const mainMenu = document.getElementById("mainMenu");
    if(mainMenu.style.left === "-120rem"){
        mainMenu.style.left = "0rem"; 

    }
    else{
        mainMenu.style.left = "-120rem"; 
    }   
}