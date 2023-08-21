function add()
{
    let a=Number(document.getElementById('number 1').value);
    let b=Number(document.getElementById('number 2').value);
    let Answer=a+b;
    document.getElementById('Answer').value=Answer;
}
function sub()
{
    let a=Number(document.getElementById('number 1').value);
    let b=Number(document.getElementById('number 2').value);
    let Answer=a-b;
    document.getElementById('Answer').value=Answer;
}function multiply()
{
    let a=Number(document.getElementById('number 1').value);
    let b=Number(document.getElementById('number 2').value);
    let Answer=a*b;
    document.getElementById('Answer').value=Answer;
}function division()
{
    let a=Number(document.getElementById('number 1').value);
    let b=Number(document.getElementById('number 2').value);
    let Answer=a/b;
    document.getElementById('Answer').value=Answer;
}