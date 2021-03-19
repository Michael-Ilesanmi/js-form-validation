//  Hide and Show Password


function showPsw()  {
    var x = document.getElementById("psw");
    var y =document.getElementById('show');
    if (x.type === "password")  {
        x.type = "text";
        y.className = 'fa fa-eye-slash'
    }
    else    {
        x.type = "password";
        y.className = 'fa fa-eye'
    }
}

// Form Validation


function validate() {
    var psw = document.getElementById('psw');
    var rePsw   = document.getElementById('re-psw');
    var pswUnmatch  = document.getElementById('invalidRePsw');
    

    if (psw.value != rePsw.value)
    {
        pswUnmatch.style.visibility = 'visible';
        return false;
    }
    else    {
        return true;
    }
}
