//Couldn't figure out how to do switch so I just did it with ifs

hmbMenu.onclick=function(s){
  switch(s) {
  case "Dessert Voting":
    ChangeForm(dessertVoting)
    break;
  case "Describing You":
    ChangeForm(describeYou)
    break;
  case "loginCU":
    ChangeForm(loginCU)
    break;
  case "Exercise Knowledge":
    ChangeForm(favExercises)
    break;
  case "Favorite Foods":
    ChangeForm(favFoods)
    break;
  default:
    // code block
}
}
  
/*
  if (typeof(s) == "object") {
    return
}  
  if (s === "Dessert Voting") {
         ChangeForm(dessertVoting)
    }
  if (s === "Describing You") {
        ChangeForm(describeYou)
    }
  if (s === "loginCU") {
        ChangeForm(loginCU)
    }
  if (s === "Exercise Knowledge") {
        ChangeForm(favExercises)
    }
  if (s === "Favorite Foods") {
        ChangeForm(favFoods)
    }
}
*/