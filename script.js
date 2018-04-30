function displayFormat() {
	var cc = document.querySelectorAll('.format > div').length;
	for (var i = 0; i <= cc; i++) {
		document.querySelectorAll('.format > div')[0].style.display = 'block'
		document.querySelectorAll('.format > div')[1].style.display = 'block'
	}
}
function start() {
	var num = document.querySelector('input').value.toLowerCase();
	console.log(num)
	//Returns a string
	//Determine the length of the input to decide which function to run determined by the character length.
	var numLength = num.length;
	console.log(numLength)
	if (numLength == 3) {
		console.log('3')
	} else if (numLength == 4) {
		console.log('4')
	} else if (numLength == 6) {
		console.log('six values')
	} else if (numLength == 7) {
		// document.querySelectorAll('.format > div')[0].style.display = 'none'
		// document.querySelectorAll('.format > div')[1].style.display = 'none'
		inputSeven()
	}	
	// } else if (numLength == 1 || numLength == 2 || numLength == 5) {
	// 	alert("not enough values");
	// } else if (numLength == 0) {
	// 	alert("enter values");
	// }	
}

// ------------------------------------------------------------------------------------- SEVEN 'DIGITS'
function inputSeven() {
	var num = document.querySelector('input').value.toLowerCase();
	var numLength = num.length;
	var dd = document.querySelectorAll('.smallBox');
	var hex;
	// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + CALCULATE THE RGB VALUES.
	// ---------- ---------- ---------- red value
		var a;
		var b;
		if (num.charAt(1) === "a") {
			var a = 10
		} else if (num.charAt(1) === "b") {
			var a = 11
		} else if (num.charAt(1) === "c") {
			var a = 12
		} else if (num.charAt(1) === "d") {
			var a = 13
		} else if (num.charAt(1) === "e") {
			var a = 14
		} else if (num.charAt(1) === "f") {
			var a = 15
		} else {
			var a = num.charAt(1)
		};
		
		if (num.charAt(2) === "a") {
			var b = 10
		} else if (num.charAt(2) === "b") {
			var b = 11
		} else if (num.charAt(2) === "c") {
			var b = 12
		} else if (num.charAt(2) === "d") {
			var b = 13
		} else if (num.charAt(2) === "e") {
			var b = 14
		} else if (num.charAt(2) === "f") {
			var b = 15
		} else {
			var b = num.charAt(2)
		};
		var red = (a * 16) + (b * 1);
	// ---------- ---------- ---------- green value
		var c;
		var d;
		if (num.charAt(3) === "a") {
			var c = 10
		} else if (num.charAt(3) === "b") {
			var c = 11
		} else if (num.charAt(3) === "c") {
			var c = 12
		} else if (num.charAt(3) === "d") {
			var c = 13
		} else if (num.charAt(3) === "e") {
			var c = 14
		} else if (num.charAt(3) === "f") {
			var c = 15
		} else {
			var c = num.charAt(3)
		};

		if (num.charAt(4) === "a") {
			var d = 10
		} else if (num.charAt(4) === "b") {
			var d = 11
		} else if (num.charAt(4) === "c") {
			var d = 12
		} else if (num.charAt(4) === "d") {
			var d = 13
		} else if (num.charAt(4) === "e") {
			var d = 14
		} else if (num.charAt(4) === "f") {
			var d = 15
		} else {
			var d = num.charAt(4)
		};
		var green = (c * 16) + (d * 1);
	// ---------- ---------- ---------- blue value
		var e;
		var f;
		if (num.charAt(5) === "a") {
			var e = 10
		} else if (num.charAt(5) === "b") {
			var e = 11
		} else if (num.charAt(5) === "c") {
			var e = 12
		} else if (num.charAt(5) === "d") {
			var e = 13
		} else if (num.charAt(5) === "e") {
			var e = 14
		} else if (num.charAt(5) === "f") {
			var e = 15
		} else {var e = num.charAt(5)
		};
		
		if (num.charAt(6) === "a") {
			var f = 10
		} else if (num.charAt(6) === "b") {
			var f = 11
		} else if (num.charAt(6) === "c") {
			var f = 12
		} else if (num.charAt(6) === "d") {
			var f = 13
		} else if (num.charAt(6) === "e") {
			var f = 14
		} else if (num.charAt(6) === "f") {
			var f = 15
		} else {var f = num.charAt(6)
		};
		var blue = (e * 16) + (f * 1);
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the BG color to the "converted" color
		document.querySelector("body").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
	// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + CHANGE THE PAGE THEME TO COMPLIMENT THE BG COLOR.
	// ---------- ---------- ---------- Convert rgb to HSL
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
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the POP-UP ICON color to the compliment color 
		document.querySelector('i').style.color  = "hsl("+complimentHue+","+s+"%,"+l+"%)"
	// ---------- ---------- ---------- Calculate darker BG color, Monochrome
		var darkLightness;
		if (l <= 50) {
			var darkLightness = 90;
		} else if (l > 50) {
			var darkLightness = 10;
		}
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Change the Title and subtitles to a LIGHT monochrome theme
		document.querySelector('h1').style.color  = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.querySelector('.data p').style.color  = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		document.querySelector('.rgb').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Display the RED, GREEN and BLUE colors
		if (isNaN(red)) {
			document.getElementById('rr').innerHTML = "???";
			document.getElementById('rr').style.color = "red";
		} else {
			document.getElementById('rr').innerHTML = red;
			document.getElementById('rr').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		if (isNaN(green)) {
			document.getElementById('gg').innerHTML = "???"
			document.getElementById('gg').style.color = "red";
		} else {
			document.getElementById('gg').innerHTML = green;
			document.getElementById('gg').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
		if (isNaN(blue)) {
			document.getElementById('bb').innerHTML = "???";
			document.getElementById('bb').style.color = "red";
		} else {
			document.getElementById('bb').innerHTML = blue;
			document.getElementById('bb').style.color = "hsl("+h+","+s+"%,"+darkLightness+"%)";
		}
	// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^display error on the inputs.
		for (var i = 0 ; i <= numLength ; i++) {
			var dd = document.querySelectorAll('.smallBox');
			dd[i].innerHTML = num.charAt(i);
			var position = num.charAt(i);
			if ( position === "a" || position === "b" || position === "c" || position === "d" || 
				position === "e" || position === "f" || position === "0" || position === "1" || 
				position === "2" || position === "3" || position === "4" || position === "5" || 
				position === "6" || position === "7" || position === "8" || position === "9" ) {
				document.querySelector('.error').style.visibility = 'hidden';
				document.querySelectorAll('.smallBox')[0].innerHTML = '#';
				document.querySelectorAll('.smallBox')[0].style.background  = 'green';
				dd[i].innerHTML = num.charAt(i);
				dd[i].style.backgroundColor = "green"
			}
			 else {
			 	document.querySelector('.error').style.visibility = 'visible';
				dd[i].style.backgroundColor = "red"
			}
		}
		console.log('ola it"s working')
}
