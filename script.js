function execute(){
    let selectOption = document.querySelector("#options").value;
    let descText = document.querySelector("#desc").value;
    let amount = document.querySelector("#amnt").value;
    let plusList = document.querySelector("#plusList");
    let minusList = document.querySelector("#minusList");
    let Pnewli = document.createElement('li');
    let Mnewli = document.createElement('li');
    let Pbtn = document.createElement('button');
    Pbtn.innerHTML = "Delete";
    let Mbtn = document.createElement('button');
    Mbtn.innerHTML = "Delete";
    
    if(!descText){
      alert('enter description');
    }else if(!amount){
      alert('enter amount');
    }else{ 
    switch(selectOption){
      case 'plus' : Pnewli.append(` Credit ${amount} for ${descText} `);
                    plusList.appendChild(Pnewli);
                    plusList.appendChild(Pbtn);
                    
      break;

      case 'minus' : Mnewli.append(` Debit ${amount} for ${descText}`);
                     minusList.appendChild(Mnewli);
                     minusList.appendChild(Mbtn);
            
      break;  
    }

      Pnewli.addEventListener('click',()=>{
        console.log(Pnewli);
        Pnewli.contentEditable=true;
      });
      Mnewli.addEventListener('click',()=>{
        Mnewli.contentEditable=true;
      });
      Pbtn.addEventListener('click',()=>{
        plusList.removeChild(Pnewli);
        plusList.removeChild(Pbtn);
      });
      Mbtn.addEventListener('click',()=>{
        minusList.removeChild(Mnewli);
        minusList.removeChild(Mbtn);
      });
    

  }
}