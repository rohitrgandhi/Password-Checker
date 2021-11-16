const pswrd=document.querySelector("#pswrd");
const submitbtn=document.querySelector("#submitbtn");

const number=document.querySelector("#number");

submitbtn.addEventListener("click",checker);

pswrd.addEventListener("input", copy);
    function copy()
    {
        let Orignalvalue=pswrd.value;
        return Orignalvalue;
    }
function checker()
{
        let Ovalue=copy();
        let splitted=Ovalue.split();
        let count=0;
        for(i=0; i<10;i++)
        {
            splitted[i];
            count=count+1;
        }
        if(count<10)
        {
            number.innerHTML="Enter 10 Characters";
        }
        else if (count==10)
         {
            number.innerHTML="Perfecto";

        }
        else
        {
            number.innerHTML="Enter only 10 characters";
        }
    

}