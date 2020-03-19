const title = document.querySelector("#hooah");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // console.log(hasClass)
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else{
    //     title.classList.remove(CLICKED_CLASS)
    // }
}
function init(){
    title.addEventListener("click",handleClick);

}
init();