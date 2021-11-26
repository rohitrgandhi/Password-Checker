const pswrd=document.querySelector("#pswrd");
const submitbtn=document.querySelector("#submitbtn");

const number=document.querySelector("#number");

submitbtn.addEventListener("click",checker);

function outputMsg(message)
{   number.innerHTML=message;
}
function checker()
{
    let output=pswrd.value;
    let passwordsplit=output.length;
    if(passwordsplit==10)
    {
        outputMsg('Password is successful.');
        pswrd.style.background="green";
    }
    else if(passwordsplit<10)
    {
        outputMsg('Password is not successful.');
        pswrd.style.background="red";
    }
    else(passwordsplit>10)
    {
        outputMsg('Password is not successful.');
        pswrd.style.background="red";
    }
    
        // let Ovalue=pswrd.value;
        // let splitted=Ovalue.split();
        // let count=0;
        // for(i=0; i<10;i++)
        // {
        //     splitted[i];
        //     count=count+1;
        // }
        // if(count<10)
        // {
        //     number.innerHTML="Enter 10 Characters";
        // }
        // else if (count==10)
        //  {
        //     number.innerHTML="Perfecto";

        // }
        // else
        // {
        //     number.innerHTML="Enter only 10 characters";
        // }
    

}