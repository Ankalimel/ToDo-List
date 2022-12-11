const tasks = document.querySelectorAll('.tasks li');
const trash = document.querySelectorAll('.trashbin');
const add = document.querySelectorAll('h5 img');


//Toggle checkbox
for(let i=0;i<tasks.length;i++){
	tasks[i].addEventListener('click', function(t) {
    t.target.classList.toggle('checked');
	});
}

//Delete a task
for (let i = 0; i<trash.length; i++) {
  trash[i].onclick = function() {
    let a = this.parentElement;
    a.style.display = "none";
  }
}

//Make input field visible
function activateInput(){
	let addNewInput = document.getElementById('addTask1');
	let addNewInputButton = document.getElementById('addTaskButton1');
	let plus = document.querySelector(".plus");
	addNewInput.style.display="inline";
	addNewInputButton.style.display="inline";
	plus.src="img/minus.png";
	//close input field
	plus.addEventListener('click', function(t) {
		addNewInput.style.display="none";
		addNewInputButton.style.display="none";
    	t.target.src="img/plus.png";
  	});
}

//Add a new task
function addNew(){
  let list = document.getElementById('firstUL'); //get the required UL
  let li = document.createElement("li"); //create new li element
  let inputValue = document.getElementById("addTask1").value; //get input value
  let t = document.createTextNode(inputValue); //create text node for li element
  let checkbox = document.createElement("span"); //create span element for the checkbox
  let editPic = document.createElement("img"); //create edit icon
  let trashPic = document.createElement("img"); //create delete icon

  //create new task with all its elements
  checkbox.classList.add('circle');
  editPic.src="img/edit.png";  
  trashPic.src="img/trash.png";
  li.appendChild(checkbox);
  li.appendChild(t);
  li.appendChild(editPic);
  li.appendChild(trashPic);

  //check if value is input
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    list.appendChild(li);
  }

  //clear the input field
  document.getElementById("addTask1").value = "";

  //toggle checkbox for new items
  li.addEventListener('click', function(t) {
    t.target.classList.toggle('checked');
  });

  //delete new items
  trashPic.onclick = function() {
    let a = this.parentElement;
    a.style.display = "none";
  }

}







