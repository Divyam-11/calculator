let x = document.querySelectorAll(".buttons");
let screen_text = document.querySelectorAll("p")[0];
x.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
console.log(btn.innerText , "was clicked");

if(btn.innerText == "C"){
let str = screen_text.innerText;
if(str.length > 0){
    str = str.substring(0, str.length - 1);
}
screen_text.innerText = str;

}
else if(btn.innerText == "AC"){
screen_text.innerText = "";
}
else if(btn.innerText == "="){
    try {
        screen_text.innerText = eval(screen_text.innerText);
    } catch (error) {
        screen_text.innerText = "Error..";
    }
    
}
else {
    str = screen_text.innerText;
    str = str + btn.innerText;
    screen_text.innerText = str;
}
    })
})