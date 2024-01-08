function ageCheck()
{
    var age=document.getElementById('age').value;
    if(age>=18)
    {
        // document.getElementById('child').style.display="none";
        // document.getElementById('adult').style.display="block";
        document.getElementById('child').style.filter='blur('+40+'px)';
        document.getElementById('child').style.transition='1s ease';
        document.getElementById('adult').style.filter='blur('+0+'px)';
    }
    else{
        // document.getElementById('adult').style.display="none";
        // document.getElementById('child').style.display="block";
        document.getElementById('adult').style.filter='blur('+40+'px)';
        document.getElementById('adult').style.transition='1s ease';
        document.getElementById('child').style.filter='blur('+0+'px)';
    }
    console.log(age);
}