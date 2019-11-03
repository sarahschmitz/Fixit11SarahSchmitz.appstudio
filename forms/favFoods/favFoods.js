let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

btnFoodsChange.onclick=function(){
  ChangeForm(dessertVoting)
}

favFoods.onshow=function(){
    lstFoods.clear()   
  for (i = 0; i <= goodFoods.length - 1; i++) 
    lstFoods.addItem(goodFoods[i])
}

lstFoods.onclick=function(){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    lstFoods.value = s   // make dropdown show choice user made
    NSB.MsgBox("s is " + s + " and .selection is " + lstFoods.selection)
  }
}
btnFoodSubmit.onclick=function(){
  NSB.MsgBox(`You picked ${lstFoods.selection} - that is a great choice!`)
}
