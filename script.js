var add = document.getElementById('add');
var input = document.getElementById('user');
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;

}

function insert() {
    var li = document.createElement("li");
    li.className = "new";
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.addEventListener("click", function() {
		
		var finished = this.classList.toggle("done");
		
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

	
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
    input.value = "";


}

function addListAfterClick() {
    if (inputLength() > 0) {
        insert();
    }

}

function done() {

    var remove = document.querySelector("li").classList.add("done");
}

function removeListAfterClick() {
    if (inputLength() <= 0) {
        done();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        insert();
    }
}
add.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
