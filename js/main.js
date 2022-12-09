const task = document.getElementsByTagName('LI');
let i;

for(i=0;i<task.length;i++){
	task[i].addEventListener('click', function(t) {
  if (t.target.tagName === 'LI') {
    t.target.classList.toggle('checked');
  }
});
}

