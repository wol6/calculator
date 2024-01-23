let display = document.getElementById("display")

let button = document.getElementsByClassName("btn")

for(let i=0;i<button.length;i++)
{
    button[i].addEventListener('click',clicked)
}
let sum=0
let calci="";

function clicked(e)
{

  let  clickedBtn=e.target.innerHTML
   

    if(clickedBtn==1 || clickedBtn==2 || clickedBtn==3|| clickedBtn==4|| clickedBtn==5
        || clickedBtn==6|| clickedBtn==7|| clickedBtn==8|| clickedBtn==9|| clickedBtn==0)
    {
          calci+=clickedBtn
          display.innerHTML=calci
        //   console.log(clickedBtn)
          
    }
    if(clickedBtn=="+"||clickedBtn=="-"||clickedBtn=="*"||clickedBtn=="/"||clickedBtn=="%"||clickedBtn==".")
    {
        calci+=clickedBtn
        display.innerHTML=calci
    }
    if(clickedBtn=="=")
    {
        sum=eval(calci)
        
        display.innerHTML=sum
    }
    if(clickedBtn=="AC")
    {
       calci=""
       display.innerHTML=calci
    }
    if(clickedBtn=="DE")
    {
        calci=calci.slice(0,length-1)
        display.innerHTML=calci
    }



}