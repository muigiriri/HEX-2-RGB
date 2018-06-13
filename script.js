function start() {
	var val = document.querySelector('input').value.toLowerCase();
	// console.log(val)
	//Returns a string
	//Determine the length of the input to decide which function to run determined by the character length.
	var valLength = val.length;
	if (valLength == 3) {
		withoutHash();
		threeValues();
		calculateThree();
		changeColorScheme()
	} else if (valLength == 1 || valLength == 2 || valLength == 5) {
		console.log('not valid')
	}else if (valLength == 4) {
		withHash();
		fourValues();
		calculateFour();
		changeColorScheme()	
	} else if (valLength == 6) {
		withoutHash()
		sixValues();
		calculateSix();	
		changeColorScheme()	
	} else if (valLength == 7) {
		withHash();	
		sevenValues();
		calculateSeven();
		changeColorScheme();		
	}		
}
// + + + CHECK VALIDITY OF THE INPUT VALUES AND DISPLAY THEM IN THE ERROR BOXES
// + + Display For inputs with a hash #. at the beginning 4, 7.
// + For # values
function withHash() {
	// check to see if the first value is a "#"
	var val = document.querySelector('input').value.toLowerCase();
	var hex = val.charAt(0);
	if (hex === '#') {
		document.querySelector('.hexBox').innerHTML  = '#';
		document.querySelector('.hexBox').style.backgroundColor = "transparent";
	} else {
		document.querySelector('.hexBox').innerHTML  = hex;
		document.querySelector('.hexBox').style.background  = "red";
	}
}
// + For 4 values
function fourValues() {
	var val = document.querySelector('input').value.toLowerCase();
	var r = val.charAt(1);
	var r1 = val.charAt(1);
	var g = val.charAt(2);
	var g1 = val.charAt(2);
	var b = val.charAt(3);
	var b1 = val.charAt(3);
	//insert the values in an array	
	var rgb = [r,r1,g,g1,b,b1,];
	var rgbLength = rgb.length;
	for (var i = 0 ; i < rgbLength ; i++) {
		var pos = rgb[i];
		if ( pos === "a" || pos === "b" || pos === "c" || pos === "d" || 
			pos === "e" || pos === "f" || pos === "0" || pos === "1" || 
			pos === "2" || pos === "3" || pos === "4" || pos === "5" || 
			pos === "6" || pos === "7" || pos === "8" || pos === "9") {				
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "transparent";
			// document.querySelectorAll('.smallBox')[i].style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
			document.querySelectorAll('.smallBox')[i].style.border = '1px';
			document.querySelectorAll('.smallBox')[i].style.borderStyle = 'solid';
			// document.querySelectorAll('.smallBox')[i].style.borderColor = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		else {
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "red";
		}
	}
}
// + For 7 values
function sevenValues() {
	var val = document.querySelector('input').value.toLowerCase();
	var r = val.charAt(1);
	var r1 = val.charAt(2);
	var g = val.charAt(3);
	var g1 = val.charAt(4);
	var b = val.charAt(5);
	var b1 = val.charAt(6);
	//insert the values in an array	
	var rgb = [r,r1,g,g1,b,b1,];
	var rgbLength = rgb.length;
	for (var i = 0 ; i < rgbLength ; i++) {
		var pos = rgb[i];
		if ( pos === "a" || pos === "b" || pos === "c" || pos === "d" || 
			pos === "e" || pos === "f" || pos === "0" || pos === "1" || 
			pos === "2" || pos === "3" || pos === "4" || pos === "5" || 
			pos === "6" || pos === "7" || pos === "8" || pos === "9") {				
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "transparent";
			// document.querySelectorAll('.smallBox')[i].style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
			document.querySelectorAll('.smallBox')[i].style.border = '1px';
			document.querySelectorAll('.smallBox')[i].style.borderStyle = 'solid';
			// document.querySelectorAll('.smallBox')[i].style.borderColor = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		else {
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "red";
		}
	}
}
// + + Display For inputs without a hash #. at the beginning 3, 6. 
// + Insert # value
function withoutHash() {
	var val = document.querySelector('input').value.toLowerCase();
	var hex = val.charAt(0);
	document.querySelector('.hexBox').innerHTML  = '#';
	document.querySelector('.hexBox').style.backgroundColor = "transparent";
}
// + For 3 values
function threeValues() {
	var val = document.querySelector('input').value.toLowerCase();
	var r = val.charAt(0);
	var r1 = val.charAt(0);
	var g = val.charAt(1);
	var g1 = val.charAt(1);
	var b = val.charAt(2);
	var b1 = val.charAt(2);
	//insert the values in an array	
	var rgb = [r,r1,g,g1,b,b1,];
	var rgbLength = rgb.length;
	for (var i = 0 ; i < rgbLength ; i++) {
		var pos = rgb[i];
		if ( pos === "a" || pos === "b" || pos === "c" || pos === "d" || 
			pos === "e" || pos === "f" || pos === "0" || pos === "1" || 
			pos === "2" || pos === "3" || pos === "4" || pos === "5" || 
			pos === "6" || pos === "7" || pos === "8" || pos === "9") {				
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "transparent";
			// document.querySelectorAll('.smallBox')[i].style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
			document.querySelectorAll('.smallBox')[i].style.border = '1px';
			document.querySelectorAll('.smallBox')[i].style.borderStyle = 'solid';
			// document.querySelectorAll('.smallBox')[i].style.borderColor = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		else {
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "red";
		}
	}
}
// + For 6 values
function sixValues() {
	var val = document.querySelector('input').value.toLowerCase();
	var r = val.charAt(0);
	var r1 = val.charAt(1);
	var g = val.charAt(2);
	var g1 = val.charAt(3);
	var b = val.charAt(4);
	var b1 = val.charAt(5);
	//insert the values in an array	
	var rgb = [r,r1,g,g1,b,b1,];
	var rgbLength = rgb.length;
	for (var i = 0 ; i < rgbLength ; i++) {
		var pos = rgb[i];
		if ( pos === "a" || pos === "b" || pos === "c" || pos === "d" || 
			pos === "e" || pos === "f" || pos === "0" || pos === "1" || 
			pos === "2" || pos === "3" || pos === "4" || pos === "5" || 
			pos === "6" || pos === "7" || pos === "8" || pos === "9") {				
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "transparent";
			// document.querySelectorAll('.smallBox')[i].style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
			document.querySelectorAll('.smallBox')[i].style.border = '1px';
			document.querySelectorAll('.smallBox')[i].style.borderStyle = 'solid';
			// document.querySelectorAll('.smallBox')[i].style.borderColor = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		else {
			document.querySelectorAll('.smallBox')[i].innerHTML = rgb[i];
			document.querySelectorAll('.smallBox')[i].style.backgroundColor = "red";
		}
	}
}
// + + + CALCULATIONS (HEX TO R.G.B)
// + For 3 values
function calculateThree() {
	// + + + + + + + + + + + + + + + + + + + CALCULATE THE RGB VALUES.
	var num = document.querySelector('input').value.toLowerCase();
	var numLength = num.length;
	var dd = document.querySelectorAll('.smallBox');
	var hex;
	// ---------- ---------- ---------- red value
		var a = convertValue(0);
		var b = convertValue(0);
		var red = (a * 16) + (b * 1);
		console.log(red)
	// ---------- ---------- ---------- green value
		var c = convertValue(1);
		var d = convertValue(1);
		var green = (c * 16) + (d * 1);
		console.log(green)
	// ---------- ---------- ---------- blue value
		var e = convertValue(2);
		var f = convertValue(2);
		var blue = (e * 16) + (f * 1);
		console.log(blue)
	// Display RGB values
		if ((red / red) !== 1) {
			document.getElementById('rr').innerHTML = "???";
			document.getElementById('rr').style.color = "red";
		} else {
			document.getElementById('rr').innerHTML = red;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(green)) {
			console.log(green);
			document.getElementById('gg').innerHTML = "???"
			document.getElementById('gg').style.color = "red";
		} else {
			document.getElementById('gg').innerHTML = green;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(blue)) {
			document.getElementById('bb').innerHTML = "???";
			document.getElementById('bb').style.color = "red";
		} else {
			document.getElementById('bb').innerHTML = blue;
			changeColorScheme(red,green,blue);
		}
	// Change the Bg Color scheme
	ChangeBg(red,green,blue);
}
// + For 4 values
function calculateFour() {
	// + + + + + + + + + + + + + + + + + + + CALCULATE THE RGB VALUES.
	var num = document.querySelector('input').value.toLowerCase();
	var numLength = num.length;
	var dd = document.querySelectorAll('.smallBox');
	var hex;
	// ---------- ---------- ---------- red value
		var a = convertValue(1);
		var b = convertValue(1);
		var red = (a * 16) + (b * 1);
		console.log(red)
	// ---------- ---------- ---------- green value
		var c = convertValue(2);
		var d = convertValue(2);
		var green = (c * 16) + (d * 1);
		console.log(green)
	// ---------- ---------- ---------- blue value
		var e = convertValue(3);
		var f = convertValue(3);
		var blue = (e * 16) + (f * 1);
		console.log(blue)
	// Display RGB values
		if ((red / red) !== 1) {
			document.getElementById('rr').innerHTML = "???";
			document.getElementById('rr').style.color = "red";
		} else {
			document.getElementById('rr').innerHTML = red;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(green)) {
			console.log(green);
			document.getElementById('gg').innerHTML = "???"
			document.getElementById('gg').style.color = "red";
		} else {
			document.getElementById('gg').innerHTML = green;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(blue)) {
			document.getElementById('bb').innerHTML = "???";
			document.getElementById('bb').style.color = "red";
		} else {
			document.getElementById('bb').innerHTML = blue;
			changeColorScheme(red,green,blue);
		}
	// Change the Bg Color scheme
	ChangeBg(red,green,blue);
}
// + For 6 values
function calculateSix() {
	// + + + + + + + + + + + + + + + + + + + CALCULATE THE RGB VALUES.
	var num = document.querySelector('input').value.toLowerCase();
	var numLength = num.length;
	var dd = document.querySelectorAll('.smallBox');
	var hex;
	// ---------- ---------- ---------- red value
		var a = convertValue(0);
		var b = convertValue(1);
		var red = (a * 16) + (b * 1);
		console.log(red)
	// ---------- ---------- ---------- green value
		var c = convertValue(2);
		var d = convertValue(3);
		var green = (c * 16) + (d * 1);
		console.log(green)
	// ---------- ---------- ---------- blue value
		var e = convertValue(4);
		var f = convertValue(5);
		var blue = (e * 16) + (f * 1);
		console.log(blue)
	// Display RGB values
		if ((red / red) !== 1) {
			document.getElementById('rr').innerHTML = "???";
			document.getElementById('rr').style.color = "red";
		} else {
			document.getElementById('rr').innerHTML = red;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(green)) {
			console.log(green);
			document.getElementById('gg').innerHTML = "???"
			document.getElementById('gg').style.color = "red";
		} else {
			document.getElementById('gg').innerHTML = green;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(blue)) {
			document.getElementById('bb').innerHTML = "???";
			document.getElementById('bb').style.color = "red";
		} else {
			document.getElementById('bb').innerHTML = blue;
			changeColorScheme(red,green,blue);
		}
	// Change the Bg Color scheme
	ChangeBg(red,green,blue);
}
// + For 7 values
function calculateSeven() {
	var num = document.querySelector('input').value.toLowerCase();
	var numLength = num.length;
	var dd = document.querySelectorAll('.smallBox');
	var hex;
	// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + CALCULATE THE RGB VALUES.
	// ---------- ---------- ---------- red value
		var a = convertValue(1);
		var b = convertValue(2);
		var red = (a * 16) + (b * 1);
		console.log(red)
	// ---------- ---------- ---------- green value
		var c = convertValue(3);
		var d = convertValue(4);
		var green = (c * 16) + (d * 1);
		console.log(green)
	// ---------- ---------- ---------- blue value
		var e = convertValue(5);
		var f = convertValue(6);
		var blue = (e * 16) + (f * 1);
		console.log(blue)
	// Display RGB values
		if ((red / red) !== 1) {
			document.getElementById('rr').innerHTML = "???";
			document.getElementById('rr').style.color = "red";
		} else {
			document.getElementById('rr').innerHTML = red;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(green)) {
			console.log(green);
			document.getElementById('gg').innerHTML = "???"
			document.getElementById('gg').style.color = "red";
		} else {
			document.getElementById('gg').innerHTML = green;
			changeColorScheme(red,green,blue);
		}
		if (isNaN(blue)) {
			document.getElementById('bb').innerHTML = "???";
			document.getElementById('bb').style.color = "red";
		} else {
			document.getElementById('bb').innerHTML = blue;
			changeColorScheme(red,green,blue);
		}
	// Change the Bg Color scheme
	ChangeBg(red,green,blue);
}
// + Convert valid letter inputs to corresponding numbers
function convertValue(j) {
	var num = document.querySelector('input').value.toLowerCase();
	var j;
	if (num.charAt(j) === "a") {
		var j = 10
	} else if (num.charAt(j) === "b") {
		var j = 11
	} else if (num.charAt(j) === "c") {
		var j = 12
	} else if (num.charAt(j) === "d") {
		var j = 13
	} else if (num.charAt(j) === "e") {
		var j = 14
	} else if (num.charAt(j) === "f") {
		var j = 15
	} else {
		var j = num.charAt(j)
	}
	return j;
}
// + + + CHANGE COLOR SCHEME OF THE PAGE TO MATCH CONVERTED VALUE
function ChangeBg(red,green,blue) {
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the BG color to the "converted" color
	document.querySelector("body").style.transition = "rgb(" + red + "," + green + "," + blue + ") 0.5s";
	document.querySelector("body").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
function changeColorScheme(red,green,blue) {
	// ---------- ---------- ---------- Convert rgb to HSL, (for changing the color scheme)
	// ---------- ---------- Hue (H) Value
		var hue;
		var r = red / 255;
		var g = green / 255;
		var b = blue / 255;
		var maxRGB = Math.max(r,g,b);
		var minRGB = Math.min(r,g,b);
		if (maxRGB == r) {
			var hue = ((g - b) / (maxRGB - minRGB)) * 60;
		} else if (maxRGB == g) {
			var hue = (2 +(b - r) / (maxRGB - minRGB)) * 60;
		} else if (maxRGB == b) {
			var hue = (4 +(r - g) / (maxRGB - minRGB)) * 60;
		}
	// ---------- ---------- Lightness (L) Value
		var lightness = (maxRGB + minRGB) / 2;
	// ---------- ---------- Saturation (S) Value
		var saturation = (maxRGB - minRGB) / (1 - Math.abs((2 * lightness)-1));
	// ---------- Round of the HSB values.
		var h = Math.round(hue);
		var s = Math.round(saturation * 100);
		var l = Math.round(lightness * 100);
	// ---------- ---------- ---------- Estimate complementary color.
	// ---------- ---------- changing Hue (H) value only, (S) and (L) remain constant.
		var complimentHue;
		if (h <= 180) {
			var complimentHue = h + 180;
		} else if (h > 180) {
			var complimentHue = h - 180;
		}
	// ---------- ---------- ---------- Calculate darker color, Monochrome
		var darkLightness;
		if (l <= 50) {
			var darkLightness = 90;
		} else if (l > 50) {
			var darkLightness = 10;
		}
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the Title and subtitles to a LIGHT monochrome theme
		document.querySelector('h1').style.transition  = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.querySelector('h1').style.color  = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.querySelector('.data p').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.querySelector('.data p').style.color  = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.querySelector('.rgb').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.querySelector('.rgb').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.querySelector('.rules p').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.querySelector('.rules p').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the RED, GREEN and BLUE colors
		document.getElementById('rr').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.getElementById('rr').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.getElementById('gg').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.getElementById('gg').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.getElementById('bb').style.transition = "hsl("+h+","+s+"%,"+darkLightness+"%) 0.5s";
		document.getElementById('bb').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
}
