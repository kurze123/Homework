	var list = document.getElementById("myUL");
	var index = -1;
	var element = false;
	
	function append(form) {
		var newItem = document.createElement("li");
		newItem.innerHTML = "New Title"
		document.getElementById("myUL").appendChild(newItem);
	}
	function remove() {
		var mainObj = document.getElementById("myUL");
		var oneChild = mainObj.lastChild;
        	   if (mainObj.childNodes.length > 0) {
		       mainObj.removeChild(oneChild);
		   } 
		else {
		      alert("no elemets to remove");
		}
	}
	}
     	function addFirst(form) {
		var firstItem = document.createElement("li");
		firstItem.innerHTML = "New Title at start"
		document.getElementById("myUL").prepend(firstItem);
		   }
	function selectFirst() {
		if (element != false){
			element.style.color= "black";
		}
		index = 0;
		element = list.childNodes[index];
		element.style.color= "red";
		
	}
	function selectLast() {
		if (element != false){
			element.style.color= "black";
		}
		index = list.childNodes.length -1;
		element = list.childNodes[index];
		element.style.color= "red";
	}
	
	function selectNext() {
		for(var i = 0; i < list.childNodes.length; i++) {
        	if (list.childNodes[i] == element){
				index = i;
			}
		}
		if (element != false){
			element.style.color= "black";
		}
		index += 1;
		if (index > list.childNodes.length -1) {
			index = 0;
		}
		element = list.childNodes[index];
		element.style.color= "red";
	}
		
	
	function selectPrevious() {
		index = Array.from(list.childNodes).indexOf(element);
		if (element != false){
			element.style.color= "black";
		}
		index -= 1;
		if (index < 0) {
			index = list.childNodes.length -1;
		}
		element = list.childNodes[index];
		element.style.color= "red";
	}
