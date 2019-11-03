    req1 = ""

btnLogin.onclick=function(){
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) {
      ChangeForm(favFoods)
    } else {

        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}

btnFavFoods.onclick=function(){
    ChangeForm(favFoods)
}
