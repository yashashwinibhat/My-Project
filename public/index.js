const input = document.querySelector('#useremail');
const button = document.querySelector('button');
button.disabled=true;
input.addEventListener('input',buttonHandle);

function buttonHandle()
{
    if(input.value === "")
    {
        button.disabled=true;
    }
    else
    {
        button.disabled=false;
    }
}