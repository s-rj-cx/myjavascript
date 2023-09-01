function isleap(year) {
    var a = year%4;
   var b = year%100;
   var c = year%400;
   var interpretation;
if(a == 0 && b != 0)
 interpretation = year + " " +" is a leap year";
else if( a == 0 && b == 0 && c == 0)
  interpretation = year + " " +" is a leap year";
else
 interpretation = year + " " + "is not a leap year";
  return interpretation;
}
isleap(1989);
