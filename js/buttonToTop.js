const btnScrollToTop =  document.querySelector("#btnScrollToTop")
btnScrollToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})