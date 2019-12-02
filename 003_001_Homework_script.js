		var h = document.querySelector("div");
		var index = 0;
		var myVar = setInterval(function() {
			index++;
			h.innerHTML = index;
			if (index >= 30) {
				clearInterval(myVar);
			}
		}, 1000);

		function stopContinue() {
			clearInterval(myVar);
			h.classList.toggle("class1");
			if (h.classList.contains("class1")) {
				clearInterval(myVar);
			} else {
				myVar = setInterval(function() {
					index++;
					h.innerHTML = index;
					if (index >= 30) {
						clearInterval(myVar);
					}
				}, 1000);
			}

		}

		function restart() {
			index = 0;
			clearInterval(myVar);
			var myVar2 = setInterval(function() {
				index++;
				h.innerHTML = index;
				if (index >= 30) {
					clearInterval(myVar2);
				}
			}, 1000);
		}
		/*for(var i = 0; i<=30; i++){
			setTimeout(function(){
					h.innerHTML = i;
			}, 1000*i);
		}*/
