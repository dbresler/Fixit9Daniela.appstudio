var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
for (y=0;y<=dessertList.length - 1; y++)
  drpDesserts.addItem(dessertList[y])
}


drpDesserts.onclick=function(s){
    if (typeof(s) == "object")   {
      return                    
    } else {
      drpDesserts.value = s
      lblPrompt.value = `You picked ${s}, that is a great choice!`
    }
}

btnSubmit.onclick=function(){
  ChangeForm(describeYou)
}

