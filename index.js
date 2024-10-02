const getColor = () =>
{
    let randomNum = Math.floor(Math.random() * 16777215);
    let randomCode = '#'+ randomNum.toString(16);
    document.body.style.background = randomCode;
    document.getElementById('colorcode').innerText = randomCode;
}


document.getElementById('btn').addEventListener('click',getColor);