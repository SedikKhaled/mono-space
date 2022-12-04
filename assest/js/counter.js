 

  var i = document.getElementById("countvalue");
  var i2 = document.getElementById("countvalue2");
  var i3 = document.getElementById("countvalue3");
  var i4 = document.getElementById("countvalue4");
  var value = parseInt(i.innerHTML);
  var value2 = parseInt(i2.innerHTML);
  var value3 = parseInt(i3.innerHTML);
  var value4 = parseInt(i4.innerHTML);
  function displaytime() {
           
            value++
            i.innerHTML = value;
            if(value==450){
              clearInterval(t);
            }
        }
        function displaytime2() {
           
           value2++
           i2.innerHTML = value2;
           if(value2==25){
             clearInterval(t2);
           }
       }
       function displaytime3() {
           
           value3++
           i3.innerHTML = value3;
           if(value3==550){
             clearInterval(t3);
           }
       }
       function displaytime4() {
           
           value4++
           i4.innerHTML = value4;
           if(value4==48){
             clearInterval(t4);
           }
       }
        function starttimer() {
         
  t= setInterval("displaytime()", 10);
  t2= setInterval("displaytime2()", 150);
  t3= setInterval("displaytime3()", 10);
  t4= setInterval("displaytime4()", 100);
  }

  
  document.querySelector('.close').onclick=(event)=>{
    let myalert=document.querySelector('.myaalert');
    myalert.style.display="none"
   
  }


