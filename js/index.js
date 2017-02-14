var display = document.getElementById("display");
function convertToRoman(num) {

  var thou = num%10000 - num%1000;
  var hund = num%1000 - num%100;
  var tens = num%100 - num%10;
  var ones = num%10 - num%1;
  
  var romthou; 
   switch(thou/1000)
  {
    case 1:
      romthou = "M";
      break;
    case 2:
      romthou = "MM";
      break;
    case 3:
      romthou = "MMM";
      break;
    case 4:
      romthou = "MMMM";
      break;
    default:
      romthou = "";
  }
//======================
  var romhund;
  switch(hund/100)
  {
    case 1:
      romhund = "C";
      break;
    case 2:
      romhund = "CC";
      break;
    case 3:
      romhund = "CCC";
      break;
    case 4:
      romhund = "CD";
      break;
    case 5:
      romhund = "D";
      break;
    case 6:
      romhund = "DC";
      break;
    case 7:
      romhund = "DCC";
      break;  
    case 8:
      romhund = "DCCC";
      break; 
    case 9:
      romhund = "CM";
      break; 
    default:
      romhund = "";
  }
//======================
var romtens;
  switch(tens/10)
  {
    case 1:
       romtens = "X";
      break;
    case 2:
      romtens = "XX";
      break;
    case 3:
      romtens = "XXX";
      break;
    case 4:
      romtens = "XL";
      break;
    case 5:
      romtens = "L";
      break;
    case 6:
      romtens = "LX";
      break;
    case 7:
      romtens = "LXX";
      break;  
    case 8:
      romtens = "LXXX";
      break; 
    case 9:
      romtens = "XC";
      break; 
    default:
      romtens = "";
  }    
//======================
var romones;
  switch(ones/1)
  {
    case 1:
      romones = "I";
      break;
    case 2:
      romones = "II";
      break;
    case 3:
      romones = "III";
      break;
    case 4:
      romones = "IV";
      break;
    case 5:
      romones = "V";
      break;
    case 6:
      romones = "VI";
      break;
    case 7:
      romones = "VII";
      break;  
    case 8:
      romones = "VIII";
      break; 
    case 9:
      romones = "IX";
      break; 
    default:
      romones = "";
  }  
//=====================  

  num = [romthou, romhund, romtens, romones].join("");
    
 return num;
}

var val = convertToRoman(1379);

display.innerHTML = val;
