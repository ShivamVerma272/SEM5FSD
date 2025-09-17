 let row = 5;
 for(let i=0;i<=row;i++){
  let line =" ";
    for(let j=1;j<=2*row-1;j++){
        if((i+j)>row && (j-1)<=row-1)
             {line +="*";}
        else 
            {line +=" ";}
         
    }
   console.log(line);


 }