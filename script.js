function stringNumber() {
	//After the code runs, and theres an error, when it if fixed, these default styles load.
	document.getElementById("errorBox").style.display = "none";
	document.getElementById("inputR").style.borderColor = "lightsteelblue";
	document.getElementById("inputG").style.borderColor = "lightsteelblue";
	document.getElementById("inputB").style.borderColor = "lightsteelblue";
	document.getElementById("box-hash").style.backgroundColor = "white";
	document.getElementById("box-hash").style.borderRadius = "5px";
	document.getElementById("box-a").style.backgroundColor = "white";
	document.getElementById("box-a").style.borderRadius = "5px";
	document.getElementById("box-b").style.backgroundColor = "white";
	document.getElementById("box-b").style.borderRadius = "5px";
	document.getElementById("box-c").style.backgroundColor = "white";
	document.getElementById("box-c").style.borderRadius = "5px";
	document.getElementById("box-d").style.backgroundColor = "white";
	document.getElementById("box-d").style.borderRadius = "5px";
	document.getElementById("box-e").style.backgroundColor = "white";
	document.getElementById("box-e").style.borderRadius = "5px";
	document.getElementById("box-f").style.backgroundColor = "white";
	document.getElementById("box-f").style.borderRadius = "5px";
	document.getElementById("box-f").style.color = "gray";
	start();
}
function start() {
	//CODE 'LOGICALY' STARTS HERE
	var num = document.getElementById("inputOne").value;
	//Returns a string
	//Determine the length of the input to decide which function to run determined by the character length.
	var numLength = num.length;
	if (numLength == 3) {
		inputThree()
	} else if (numLength == 4) {
		inputFour()
	} else if (numLength == 6) {
		inputSix();
	} else if (numLength == 7) {
		inputSeven();
	} else if (numLength == 1 || numLength == 2 || numLength == 5) {
		alert("not enough values");
	} else if (numLength == 0) {
		
	}	
}
//-------------------------------------------------------------------------------------When the characters are 6
function inputSix() {
	var hex = document.getElementById("inputOne").value;
	var a = hex.charAt(0);
	var b = hex.charAt(1);
	var c = hex.charAt(2);
	var d = hex.charAt(3);
	var e = hex.charAt(4);
	var f = hex.charAt(5);

	//Transfer the input values in the error boxes. displays on 'input value' error
	document.getElementById("r1").innerHTML = a;
	document.getElementById("r2").innerHTML = b;
	document.getElementById("g1").innerHTML = c;
	document.getElementById("g2").innerHTML = d;
	document.getElementById("b1").innerHTML = e;
	document.getElementById("b2").innerHTML = f;

	//Check the value "a" for validity ----------------------------------------------- A
	if (a === "a") {	
		var a = 10;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "b") {	
		var a = 11;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "c") {	
		var a = 12;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "d") {	
		var a = 13;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "e") {	
		var a = 14;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "f") {	
		var a = 15;
		document.getElementById("r1").style.color = "gray";
	} else if (isNaN(a)) {
		document.getElementById("r1").innerHTML = a;
		document.getElementById("r1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-a").style.backgroundColor = "red";
		document.getElementById("box-a").style.borderRadius = "5px";	
	} else {
		document.getElementById("r1").style.color = "gray";
	}
	//Check the value "b" for validity ----------------------------------------------- B
	if (b === "a") {
		var b = 10;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "b") {
		var b = 11;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "c") {
		var b = 12;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "d") {
		var b = 13;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "e") {
		var b = 14;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "f") {
		var b = 15;
		document.getElementById("r2").style.color = "gray";
	} else if (isNaN(b)) {
		document.getElementById("r2").innerHTML = b;
		document.getElementById("r2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-b").style.backgroundColor = "red";
		document.getElementById("box-b").style.borderRadius = "5px";
	} else {
		document.getElementById("r2").style.color = "gray";
	}
	//Check the value "c" for validity ----------------------------------------------- C
	if (c === "a") {
		var c = 10;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "b") {
		var c = 11;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "c") {
		var c = 12;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "d") {
		var c = 13;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "e") {
		var c = 14;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "f") {
		var c = 15;
		document.getElementById("g1").style.color = "gray";
	} else if (isNaN(c)) {
		document.getElementById("g1").innerHTML = c;
		document.getElementById("g1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-c").style.backgroundColor = "red";
		document.getElementById("box-c").style.borderRadius = "5px";
	} else {
		document.getElementById("g1").style.color = "gray";
	}
	//Check the value "d" for validity ----------------------------------------------- D
	if (d === "a") {
		var d = 10;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "b") {
		var d = 11;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "c") {
		var d = 12;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "d") {
		var d = 13;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "e") {
		var d = 14;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "f") {
		var d = 15;
		document.getElementById("g2").style.color = "gray";
	} else if (isNaN(d)) {
		document.getElementById("g2").innerHTML = d;
		document.getElementById("g2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-d").style.backgroundColor = "red";
		document.getElementById("box-d").style.borderRadius = "5px";
	} else {
		document.getElementById("g2").style.color = "gray";
	}
	//Check the value "e" for validity ----------------------------------------------- E
	if (e === "a") {
		var e = 10;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "b") {
		var e = 11;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "c") {
		var e = 12;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "d") {
		var e = 13;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "e") {
		var e = 14;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "f") {
		var e = 15;
		document.getElementById("b1").style.color = "gray";
	} else if (isNaN(e)) {
		document.getElementById("b1").innerHTML = e;
		document.getElementById("b1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-e").style.backgroundColor = "red";
		document.getElementById("box-e").style.borderRadius = "5px";
	} else {
		document.getElementById("b1").style.color = "gray";
	}
	//Check the value "f" for validity ----------------------------------------------- F
	if (f === "a") {
		var f = 10;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "b") {
		var f = 11;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "c") {
		var f = 12;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "d") {
		var f = 13;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "e") {
		var f = 14;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "f") {
		var f = 15;
		document.getElementById("b2").style.color = "gray";
	} else if (isNaN(f)) {
		document.getElementById("b2").innerHTML = f;
		document.getElementById("b2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-f").style.backgroundColor = "red";
		document.getElementById("box-f").style.borderRadius = "5px";
	} else {
		document.getElementById("b2").style.color = "gray";
	}
	//Calculate for input with 6 digits/values ----------------------------------------------- FORMULA
	var red = (a * 16) + (b * 1);
	if (isNaN(red)) {
		document.getElementById("inputR").innerHTML = "?";
		document.getElementById("inputR").style.borderColor = "red";
	} else {
		document.getElementById("inputR").innerHTML = red;	
	}
	var green = (c * 16) + (d * 1);
	if (isNaN(green)) {
		document.getElementById("inputG").innerHTML = "?";
		document.getElementById("inputG").style.borderColor = "red";
	} else {
		document.getElementById("inputG").innerHTML = green;	
	}
	var blue = (e * 16) + (f * 1);
	if (isNaN(blue)) {
		document.getElementById("inputB").innerHTML = "?";
		document.getElementById("inputB").style.borderColor = "red";
	} else {
		document.getElementById("inputB").innerHTML = blue;	
	}
	//Change the background color to the "converted" color
	document.getElementById("bg").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
//-------------------------------------------------------------------------------------When the characters are 7
function inputSeven() {
	var hex = document.getElementById("inputOne").value;
	var hash = hex.charAt(0);
	var a = hex.charAt(1);
	var b = hex.charAt(2);
	var c = hex.charAt(3);
	var d = hex.charAt(4);
	var e = hex.charAt(5);
	var f = hex.charAt(6);

	//Transfer the input values in the error boxes. displays on 'input value' error
	document.getElementById("hash").innerHTML = hash;
	document.getElementById("r1").innerHTML = a;
	document.getElementById("r2").innerHTML = b;
	document.getElementById("g1").innerHTML = c;
	document.getElementById("g2").innerHTML = d;
	document.getElementById("b1").innerHTML = e;
	document.getElementById("b2").innerHTML = f;

	//Check to see if "#" is # or not, since with 7 values, the first has to be #.
	if (hash !== "#") {
		document.getElementById("hash").innerHTML = hash;
		document.getElementById("hash").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-hash").style.backgroundColor = "red";
		document.getElementById("box-hash").style.borderRadius = "5px";
	} else {
		document.getElementById("hash").style.color = "gray";
	}
	//Check if "a" is a letter and convert it to its coresponding value.----------------- A
	if (a === "a") {	
		var a = 10;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "b") {	
		var a = 11;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "c") {	
		var a = 12;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "d") {	
		var a = 13;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "e") {	
		var a = 14;
		document.getElementById("r1").style.color = "gray";
	} else if (a === "f") {	
		var a = 15;
		document.getElementById("r1").style.color = "gray";
	} else if (isNaN(a)) {
		document.getElementById("r1").innerHTML = a;
		document.getElementById("r1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-a").style.backgroundColor = "red";
		document.getElementById("box-a").style.borderRadius = "5px";	
	} else {
		document.getElementById("r1").style.color = "gray";
	}
	//Check the value "b" for validity ----------------------------------------------- B
	if (b === "a") {
		var b = 10;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "b") {
		var b = 11;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "c") {
		var b = 12;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "d") {
		var b = 13;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "e") {
		var b = 14;
		document.getElementById("r2").style.color = "gray";
	} else if (b === "f") {
		var b = 15;
		document.getElementById("r2").style.color = "gray";
	} else if (isNaN(b)) {
		document.getElementById("r2").innerHTML = b;
		document.getElementById("r2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-b").style.backgroundColor = "red";
		document.getElementById("box-b").style.borderRadius = "5px";
	} else {
		document.getElementById("r2").style.color = "gray";
	}
	//Check the value "c" for validity ----------------------------------------------- C
	if (c === "a") {
		var c = 10;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "b") {
		var c = 11;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "c") {
		var c = 12;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "d") {
		var c = 13;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "e") {
		var c = 14;
		document.getElementById("g1").style.color = "gray";
	} else if (c === "f") {
		var c = 15;
		document.getElementById("g1").style.color = "gray";
	} else if (isNaN(c)) {
		document.getElementById("g1").innerHTML = c;
		document.getElementById("g1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-c").style.backgroundColor = "red";
		document.getElementById("box-c").style.borderRadius = "5px";
	} else {
		document.getElementById("g1").style.color = "gray";
	}
	//Check the value "d" for validity ----------------------------------------------- D
	if (d === "a") {
		var d = 10;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "b") {
		var d = 11;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "c") {
		var d = 12;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "d") {
		var d = 13;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "e") {
		var d = 14;
		document.getElementById("g2").style.color = "gray";
	} else if (d === "f") {
		var d = 15;
		document.getElementById("g2").style.color = "gray";
	} else if (isNaN(d)) {
		document.getElementById("g2").innerHTML = d;
		document.getElementById("g2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-d").style.backgroundColor = "red";
		document.getElementById("box-d").style.borderRadius = "5px";
	} else {
		document.getElementById("g2").style.color = "gray";
	}
	//Check the value "e" for validity ----------------------------------------------- E
	if (e === "a") {
		var e = 10;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "b") {
		var e = 11;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "c") {
		var e = 12;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "d") {
		var e = 13;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "e") {
		var e = 14;
		document.getElementById("b1").style.color = "gray";
	} else if (e === "f") {
		var e = 15;
		document.getElementById("b1").style.color = "gray";
	} else if (isNaN(e)) {
		document.getElementById("b1").innerHTML = e;
		document.getElementById("b1").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-e").style.backgroundColor = "red";
		document.getElementById("box-e").style.borderRadius = "5px";
	} else {
		document.getElementById("b1").style.color = "gray";
	}
	//Check the value "f" for validity ----------------------------------------------- F
	if (f === "a") {
		var f = 10;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "b") {
		var f = 11;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "c") {
		var f = 12;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "d") {
		var f = 13;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "e") {
		var f = 14;
		document.getElementById("b2").style.color = "gray";
	} else if (f === "f") {
		var f = 15;
		document.getElementById("b2").style.color = "gray";
	} else if (isNaN(f)) {
		document.getElementById("b2").innerHTML = f;
		document.getElementById("b2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-f").style.backgroundColor = "red";
		document.getElementById("box-f").style.borderRadius = "5px";
	} else {
		document.getElementById("b2").style.color = "gray";
	}
	//Do the calculations and display the RGB value -----------------------------FOMULA
	var red = (a * 16) + (b * 1);
	if (isNaN(red)) {
		document.getElementById("inputR").innerHTML = "?";
		document.getElementById("inputR").style.borderColor = "red";
	} else {
		document.getElementById("inputR").innerHTML = red;
	}
	var green = (c * 16) + (d * 1);
	if (isNaN(green)) {
		document.getElementById("inputG").innerHTML = "?";
		document.getElementById("inputG").style.borderColor = "red";
	} else {
		document.getElementById("inputG").innerHTML = green;
	}	
	var blue = (e * 16) + (f * 1);
	if (isNaN(blue)) {
		document.getElementById("inputB").innerHTML = "?";
		document.getElementById("inputB").style.borderColor = "red";
	} else {
		document.getElementById("inputB").innerHTML = blue;
	}	
	//Change the background color to the "converted" color
	document.getElementById("bg").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";	
}
//-------------------------------------------------------------------------------------When the characters are 4
function inputFour() {
	var hex = document.getElementById("inputOne").value;
	var hash = hex.charAt(0);
	var a = hex.charAt(1);
	var b = hex.charAt(2);
	var c = hex.charAt(3);

	//Transfer the input values in the error boxes. displays on 'input value' error
	document.getElementById("hash").innerHTML = hash;
	document.getElementById("r1").innerHTML = a;
	document.getElementById("r2").innerHTML = a;
	document.getElementById("g1").innerHTML = b;
	document.getElementById("g2").innerHTML = b;
	document.getElementById("b1").innerHTML = c;
	document.getElementById("b2").innerHTML = c;
	
	//Check to see if "#" is # or not, since with 4 values, the first has to be #.
	if (hash !== "#") {
		document.getElementById("hash").innerHTML = hash;
		document.getElementById("hash").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-hash").style.backgroundColor = "red";
		document.getElementById("box-hash").style.borderRadius = "5px";
	} else {
		document.getElementById("hash").style.color = "gray";
	}
	//Check if "a" is a letter and convert it to its coresponding value.----------------------A
	if (a === "a") {
		var a = 10;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "b") {
		var a = 11;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "c") {
		var a = 12;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "d") {
		var a = 13;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "e") {
		var a = 14;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "f") {
		var a = 15;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (isNaN(a)) {
		document.getElementById("r1").style.color = "white";
		document.getElementById("r2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-a").style.backgroundColor = "red";
		document.getElementById("box-b").style.backgroundColor = "red";
		document.getElementById("box-a").style.borderRadius = "5px";
		document.getElementById("box-b").style.borderRadius = "5px";	
	} else {
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	}
	//Check if "b" is a letter and convert it to its coresponding value.----------------------B
	if (b === "a") {
		var b = 10;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "b") {
		var b = 11;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "c") {
		var b = 12;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "d") {
		var b = 13;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "e") {
		var b = 14;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "f") {
		var b = 15;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (isNaN(b)) {
		document.getElementById("g1").style.color = "white";
		document.getElementById("g2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-c").style.backgroundColor = "red";
		document.getElementById("box-d").style.backgroundColor = "red";
		document.getElementById("box-c").style.borderRadius = "5px";
		document.getElementById("box-d").style.borderRadius = "5px";
	} else {
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	}
	//Check if "c" is a letter and convert it to its coresponding value.----------------------C
	if (c === "a") {
		var c = 10;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (c === "b") {
		var c = 11;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (c === "c") {
		var c = 12;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (c === "d") {
		var c = 13;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (c === "e") {
		var c = 14;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (c === "f") {
		var c = 15;
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	} else if (isNaN(c)) {
		document.getElementById("b1").style.color = "white";
		document.getElementById("b2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-e").style.backgroundColor = "red";
		document.getElementById("box-f").style.backgroundColor = "red";
		document.getElementById("box-e").style.borderRadius = "5px";
		document.getElementById("box-f").style.borderRadius = "5px";
	} else {
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	}
	//Do the calculations and display the RGB value---------------------------------------- FORMULA
	//Formula changes as the first value represents both 'a' and 'b'.
	//E.g #111 = #111111
	var red = (a * 16) + (a * 1);
	if (isNaN(red)) {
		document.getElementById("inputR").innerHTML = "?";
		document.getElementById("inputR").style.borderColor = "red";
	} else {
		document.getElementById("inputR").innerHTML = red;
	}
	var green = (b * 16) + (b * 1);
	if (isNaN(green)) {
		document.getElementById("inputG").innerHTML = "?";
		document.getElementById("inputG").style.borderColor = "red";
	} else {
		document.getElementById("inputG").innerHTML = green;
	}
	
	var blue = (c * 16) + (c * 1);
	if (isNaN(blue)) {
		document.getElementById("inputB").innerHTML = "?";
		document.getElementById("inputB").style.borderColor = "red";
	} else {
		document.getElementById("inputB").innerHTML = blue;
	}
	//Change the background color to the "converted" color
	document.getElementById("bg").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";		
}
//-------------------------------------------------------------------------------------When the characters are 3
function inputThree() {
	var hex = document.getElementById("inputOne").value;
	var a = hex.charAt(0);
	var b = hex.charAt(1);
	var c = hex.charAt(2);

	//Transfer the input values in the error boxes. displays on 'input value' error
	document.getElementById("hash").innerHTML = "#";
	document.getElementById("r1").innerHTML = a;
	document.getElementById("r2").innerHTML = a;
	document.getElementById("g1").innerHTML = b;
	document.getElementById("g2").innerHTML = b;
	document.getElementById("b1").innerHTML = c;
	document.getElementById("b2").innerHTML = c;
	
	//Check if "a" is a letter and convert it to its coresponding value.----------------------A
	if (a === "a") {
		var a = 10;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "b") {
		var a = 11;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "c") {
		var a = 12;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "d") {
		var a = 13;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "e") {
		var a = 14;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (a === "f") {
		var a = 15;
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	} else if (isNaN(a)) {
		document.getElementById("r1").style.color = "white";
		document.getElementById("r2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-a").style.backgroundColor = "red";
		document.getElementById("box-b").style.backgroundColor = "red";
		document.getElementById("box-a").style.borderRadius = "5px";
		document.getElementById("box-b").style.borderRadius = "5px";	
	} else {
		document.getElementById("r1").style.color = "gray";
		document.getElementById("r2").style.color = "gray";
	}
	//Check if "b" is a letter and convert it to its coresponding value.----------------------B
	if (b === "a") {
		var b = 10;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "b") {
		var b = 11;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "c") {
		var b = 12;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "d") {
		var b = 13;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "e") {
		var b = 14;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (b === "f") {
		var b = 15;
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	} else if (isNaN(b)) {
		document.getElementById("g1").style.color = "white";
		document.getElementById("g2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-c").style.backgroundColor = "red";
		document.getElementById("box-d").style.backgroundColor = "red";
		document.getElementById("box-c").style.borderRadius = "5px";
		document.getElementById("box-d").style.borderRadius = "5px";
	} else {
		document.getElementById("g1").style.color = "gray";
		document.getElementById("g2").style.color = "gray";
	}
	//Check if "c" is a letter and convert it to its coresponding value.----------------------C
	if (c === "a") {
		var c = 10;
	} else if (c === "b") {
		var c = 11;
	} else if (c === "c") {
		var c = 12;
	} else if (c === "d") {
		var c = 13;
	} else if (c === "e") {
		var c = 14;
	} else if (c === "f") {
		var c = 15;
	} else if (isNaN(c)) {
		document.getElementById("b1").style.color = "white";
		document.getElementById("b2").style.color = "white";
		document.getElementById("errorBox").style.display = "flex";
		document.getElementById("box-e").style.backgroundColor = "red";
		document.getElementById("box-f").style.backgroundColor = "red";
		document.getElementById("box-e").style.borderRadius = "5px";
		document.getElementById("box-f").style.borderRadius = "5px";
	} else {
		document.getElementById("b1").style.color = "gray";
		document.getElementById("b2").style.color = "gray";
	}
	//Do the calculations and display the RGB value---------------------------------------- FORMULA
	//Formula changes as the first value represents both 'a' and 'b'.
	//E.g 111 = 111111
	var red = (a * 16) + (a * 1);
	if (isNaN(red)) {
		document.getElementById("inputR").innerHTML = "?";
		document.getElementById("inputR").style.borderColor = "red";
	} else {
		document.getElementById("inputR").innerHTML = red;
	}
	var green = (b * 16) + (b * 1);
	if (isNaN(green)) {
		document.getElementById("inputG").innerHTML = "?";
		document.getElementById("inputG").style.borderColor = "red";
	} else {
		document.getElementById("inputG").innerHTML = green;
	}
	var blue = (c * 16) + (c * 1);
	if (isNaN(blue)) {
		document.getElementById("inputB").innerHTML = "?";
		document.getElementById("inputB").style.borderColor = "red";
	} else {
		document.getElementById("inputB").innerHTML = blue;
	}
	//Change the background color to the "converted" color
	document.getElementById("bg").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";		
}

// document.getElementById("convert").addEventListener("click", function(stringNumber){});
