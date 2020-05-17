import layoutStyle from "../../styles/layout.module.css"

<!DOCTYPE html>
<html ontouchmove>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<title>Diverse content module creation</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="jquery.js"></script>
<script src="dynamo.js"></script>
</head>
<body>
	<div class="content-wrapper">
		<div class="get-funding-section">
			<div class="container-lg">
				<div class="get-funding-content-wrapper">
					<div class="get-funding-content">
						<div class="get-funding-title-section">
							<figure><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#87bbfd"></circle><path d="M22 44A22 22 0 0 0 .09 22C0 22.66 0 23.33 0 24a24 24 0 0 0 24 24v-2a2 2 0 0 1-2-2z" fill="#555abf" fill-rule="evenodd"></path><path d="M22 44A22 22 0 0 0 .09 22C0 22.66 0 23.33 0 24a24 24 0 0 0 24 24v-2a2 2 0 0 1-2-2z" fill="#555abf" fill-rule="evenodd"></path><path d="M22.69 7a30 30 0 0 0-10.38 18.77A22 22 0 0 1 22 44a2 2 0 0 0 2 2V6.56a2 2 0 0 0-1.31.44z" fill="#fff" fill-rule="evenodd"></path><path d="M25.31 7a30 30 0 0 1 10.38 18.77A22 22 0 0 0 26 44a2 2 0 0 1-2 2V6.56a2 2 0 0 1 1.31.44z" fill="#555abf" fill-rule="evenodd"></path><path d="M44 22.36A22 22 0 0 0 26 44a2 2 0 0 1-2 2c.71 0 1.4 0 2.09-.11h.29c.48-.06.95-.12 1.42-.2l.56-.1c.58-.12 1.15-.25 1.71-.42A22 22 0 0 0 46 24a1.66 1.66 0 0 0-2-1.64z" fill="#fff" fill-rule="evenodd"></path></svg></span></figure>
							<h2>Capital</h2>
							<span class="background-blue">US only</span>
						</div>
						<div class="get-funding-text-rotate">
							<h2>Get funding <span id="container1">to</span></h2>
							<h2><span id="container2">manage cash flows</span></h2>
						</div>
						<div class="get-funding-content-bottom">
							<p class="common-text">Stripe Capital provides access to fast, flexible financing for you to grow your business.</p>
							<div class="get-funding-content-bottom-btn">
								<a href="#" class="start_now">Start now</a>
								<a href="#" class="learn_more">Learn more</a>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<script type="text/javascript">
		$('#container1').dynamo({
		    speed: 500,
		    delay: 3000,
		    lines: ["for your", "to", "for your", "to"],
		    callback: function() { console.log('callback works!'); }
		});
		$('#container2').dynamo({
		    speed: 500,
		    delay: 3000,
		    lines: ["marketing campaign", "expand your inventory", "next hire", "manage cash flows"],
		    callback: function() { console.log('callback works!'); }
		});
	</script>
</body>
</html>