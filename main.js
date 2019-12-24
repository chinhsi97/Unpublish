var countDate = new Date('Jan 1, 2020 00:00:00').getTime();

		function newYear(){
			var now = new Date().getTime();
				gap = countDate - now;

				var second = 1000;
				var minute = second * 60;
				var hour = minute * 60;
				var day = hour * 24;

				var d = Math.floor(gap / (day));
				var h = Math.floor((gap % (day)) / (hour));
				var m = Math.floor((gap % (hour))/ (minute));
				var s = Math.floor((gap % (minute))/second);

				document.getElementById('Days').innerText = d;
				document.getElementById('Hours').innerText = h;
				document.getElementById('Minutes').innerText = m;
				document.getElementById('Seconds').innerText = s;
		}

		setInterval(function(){
			newYear();
		},1000);