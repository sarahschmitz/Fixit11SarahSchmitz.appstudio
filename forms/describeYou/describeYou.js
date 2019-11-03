var firstSelection = "Optimistic"
var secondSelection = "Pessimistic"
var thirdSelection = "Trusting"
var fourthSelection = "Envious"

rdoPersonType.onchange=function(){
  switch(rdoPersonType.value) {
  case 0:
    NSB.MsgBox(`I would agree that you are a ${firstSelection} person too!`)
    break;
  case 1:
    NSB.MsgBox(`I would agree that you are a ${secondSelection} person too!`)
    break;
   case 2:
    NSB.MsgBox(`I would agree that you are a ${thirdSelection} person too!`)
    break;
  case 3:
    NSB.MsgBox(`I would agree that you are a ${fourthSelection} person too!`)
    break;
  default:
    // code block
}
}

btnDescribeChange.onclick=function(){
  ChangeForm(favExercises)
}

