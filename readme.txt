This template was made by Colorlib (https://colorlib.com)
Please visit our website for more awesome templates, themes and tools. 
<h3>QR Code Generator</Code></h3>
					<center><img src="" id="img"></center>

					<textarea placeholder="Enter Your Text" id="qrtext" rows="5" cols="36"></textarea>
					<input type="submit" class="button" value="Generate" onclick="genQR()">





<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>QR </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- LINEARICONS -->
	<link rel="stylesheet" href="fonts/linearicons/style.css">

	<!-- STYLE CSS -->
	<!-- <link rel="stylesheet" href="css/style.css"> -->
</head>

<body>

	<div class="wrapper">
		<div class="inner">
			<img src="images/image-1.png" alt="" class="image-1">
			<form action="">
				<h2 align="center">Qr Code Generator</h2>
				<center>
					<img src="" id="img">
				</center>

				<select id="size">
					<option value="100">100x100</option>
					<option value="150">150x150</option>
					<option value="200">200x200</option>
					<option value="250" selected>250x250</option>
					<option value="300">300x300</option>
				</select>
				<br><br>
				<textarea placeholder="Enter Your Text" id="qrtext"></textarea>
				<br><br>
				<input type="submit" class="button" value="Generate" onclick="genQR()">
				<br><br>
				<p>Developed By Vikas</p>
			</form>
			<img src="images/image-2.png" alt="" class="image-2">
		</div>

	</div>
	
	<script type="text/javascript">
		function genQR() {
			var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
			var myimg = document.getElementById("img");
			var mytext = document.getElementById("qrtext").value;
			var mysize = document.getElementById("size").value;

			if (mytext !== "" && mysize == "100") {
				myimg.src = gapi + "100x100" + "&chl=" + mytext;
				// https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
			}

			else if (mytext !== "" && mysize == "150") {

				myimg.src = gapi + "150x150" + "&chl=" + mytext;
			}

			else if (mytext !== "" && mysize == "200") {
				myimg.src = gapi + "200x200" + "&chl=" + mytext;
			}

			else if (mytext !== "" && mysize == "250") {
				myimg.src = gapi + "250x250" + "&chl=" + mytext;
			}

			else if (mytext !== "" && mysize == "300") {
				myimg.src = gapi + "300x300" + "&chl=" + mytext;
			}

			else {
				alert("Please Enter Text");
			}

		}
	</script>
	<!-- <script src="js/jquery-3.3.1.min.js"></script> -->
	<!-- <script src="js/main.js"></script> -->
</body>

</html>