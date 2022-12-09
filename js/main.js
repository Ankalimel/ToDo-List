const tasks = document.querySelectorAll('.tasks li');
const trash = document.querySelectorAll('.trashbin');
const add = document.querySelectorAll('h5 img');

for(let i=0;i<tasks.length;i++){
	tasks[i].addEventListener('click', function(t) {
  if (t.target.tagName.toLowerCase() === 'li') {
    t.target.classList.toggle('checked');
  }
});
}

for (let i = 0; i<trash.length; i++) {
  trash[i].onclick = function() {
    let a = this.parentElement;
    a.style.display = "none";
  }
}

// for (let i = 0; i<add.length; i++) {
//   add[i].onclick = function() {
//     let b = this.parentElement;
//     div.style.display = "none";
//   }
// }
