let goodFoods = ["candy","pizza","pasta","french fries","chicken","yogurt","apples"]

favFoods.onshow=function(){
    lstFoods.clear()   
  for (i = 0; i <= goodFoods.length - 1; i++) 
    lstFoods.addItem(goodFoods[i])
}

lstFoods.onclick=function(){
  if (typeof(s) == "object"){  
    return    
  } else {
    lstFoods.value = s  
    NSB.MsgBox("s is " + s + " and .selection is " + lstFoods.selection)
  }
}
btnFoodSubmit.onclick=function(){
  NSB.MsgBox(`You picked ${lstFoods.selection} - that is a great choice!`)
}

btnDessertPage.onclick=function(){
    ChangeForm(dessertVoting)
}
