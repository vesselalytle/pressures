/*Vessela Lytle/S#547557/COP2801
V = nRT/P, 
v is the volume in m3 
n is the number of kmols n = 1 kmol,
R = 8.3144 kPA-m3/kmol-K 
T is the temperature in kelvins T = 273.15,
P is the pressure in kPa  
pressure.js computes and prints V = nRT/P for a series of 
pressures using, using an array to hold, populated with 20 random pressure values between
 1 and 10,000 kPa. 
 Set all variables*/

var n = 1;
var T = 273.15;
var R = 8.3144;
var i = 1;

/*Display the pressures and resulting volumes in a format like the previous exercise*/

console.log ("Sample#","	", "Pressure", "	", "Volume");

while (i<21){

  	var P = Math.floor(Math.random()*10000)+1;
  	var V = n*R*T/P;
  	console.log(i,"		",P, "		",V);
	i++
}


