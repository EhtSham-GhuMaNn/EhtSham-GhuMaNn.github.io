var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liarr = document.querySelectorAll("li")
var deleteButton = document.querySelectorAll(".dltbtn")
var deed = false
var justdeleted = false

function refresh(){
	liarr = document.querySelectorAll("li")
	deed = false
}

function testfunction(){
	if (justdeleted === true){
		deed=false 
		justdeleted=false
		return
	}
	
	const index = [...this.parentElement.children].indexOf(this)
	toggleDone(index)
	
}

function deleteActionA(){
	deleteButton = document.querySelectorAll(".dltbtn")
	deed=true
	const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement)
	console.log(index)
	liarr[index].remove()
	liarr = document.querySelectorAll("li")
	justdeleted= true
}



for (i=0; i< liarr.length; i++){
	liarr[i].addEventListener("click", testfunction)
	liarr[i].innerHTML = ("<button class=\"dltbtn\">Delete</button>") +"  "+  liarr[i].innerHTML;
	
}
deleteButton = document.querySelectorAll(".dltbtn")
refresh()
function refresh(){
	for (i = 0; i < deleteButton.length; i++){
		deleteButton[i].addEventListener("click", deleteActionA)
	}
}

function toggleDone(index) {

	liarr[index].classList.toggle("done")
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	liarr = document.querySelectorAll("li")
	li.addEventListener("click", testfunction)
	li.innerHTML = ("<button class=\"dltbtn\">Delete</button>")+ "  "+ li.innerHTML;
	deleteButton = document.querySelectorAll(".dltbtn")
	refresh()

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);