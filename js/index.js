function ageCheck()
{
    var age=document.getElementById('age').value;
    if(age>=18)
    {
        document.getElementById('child').style.display="none";
        document.getElementById('adult').style.display="block";
    }
    else{
        document.getElementById('adult').style.display="none";
        document.getElementById('child').style.display="block";
    }
    console.log(age);
}