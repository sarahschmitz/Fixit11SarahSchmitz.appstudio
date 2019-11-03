let exercises = ["pushups","walking","situps","swimming", "jump rope","running","planks","biking"]
let core = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()   
    for (i = 0; i <= exercises.length - 1; i++) 
    selExercises.addItem(exercises[i])
}

selExercises.onchange=function(s){
      if (typeof(s) == "object")   
      return                    
    else { 
        selExercises.value = s
        NSB.MsgBox("You chose" + s + " and .selection is " + selExercises.selection)
}
}

btnMobileNav.onclick=function(){
    ChangeForm(mobileNav)
}
