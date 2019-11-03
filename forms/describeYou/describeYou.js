let selection1 = "Optimistic"
let selection2 = "Pessimistic"
let selection3 = "Trusting"
let selection4 = "Envious"

rdoPersonType.onchange=function(){
  switch(rdoPersonType.value) {
  case 0:
    NSB.MsgBox(`I would agree that you are a ${selection1} person too!`)
    break;
  case 1:
    NSB.MsgBox(`I would agree that you are a ${selection2} person too!`)
    break;
   case 2:
    NSB.MsgBox(`I would agree that you are a ${selection3} person too!`)
    break;
  case 3:
    NSB.MsgBox(`I would agree that you are a ${selection4} person too!`)
    break;
  default:

}
}

btnFavExercises.onclick=function(){
    ChangeForm(favExercises)
}
