var now = false
function ToggleNavMenu(){
    if(now){
        now = false
    }
    else{
        now =true
    }
    effectnavbar()
}

function effectnavbar(){
    if(now){
        document.getElementById('menuList').style.top = "100px"
    }
    else{
        document.getElementById('menuList').style.top = "-500px"
    }

}