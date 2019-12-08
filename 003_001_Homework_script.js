		var div = document.querySelector("div");
		var index = 0;

		function interval() {
			index++;
			div.innerHTML = index;
			if (index >= 30) {
				clearInterval(startInterval);
			}
		}
		var startInterval = setInterval(interval, 1000);

		function stopContinue() {
			clearInterval(startInterval);
			/*			clearInterval(myVar);*/
			div.classList.toggle("class1");
			if (div.classList.contains("class1")) {
				setInterval(interval, 1000);

			} else {
				clearInterval(startInterval);
			}
		}

		function restart() {
			index = 0;
		}
