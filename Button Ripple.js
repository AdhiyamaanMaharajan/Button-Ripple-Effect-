const btnEL= document.querySelector(".btn");

btnEL.addEventListener("mouseover" , (EVENT) => {
    const x  = EVENT.pageX - btnEL.offsetLeft ;
    const y = EVENT.pageY - btnEL.offsetTop ;
    
    btnEL.style.setProperty( "--XPosition" , x + "px" );
    btnEL.style.setProperty( "--YPosition", y + "px" );

});