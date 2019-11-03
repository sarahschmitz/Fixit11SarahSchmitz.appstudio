var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()   
    for (i = 0; i <= exercises.length - 1; i++) 
    selExercises.addItem(exercises[i])
}

selExercises.onchange=function(s){
      if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        selExercises.value = s   // make dropdown show choice user made
        NSB.MsgBox("You chose" + s + " and .selection is " + selExercises.selection)
}
}

btnExercisesChange.onclick=function(){
  ChangeForm(mobileNav)
}
