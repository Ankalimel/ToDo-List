const tasks = document.getElementsByTagName('LI');
let i;

for(i=0;i<tasks.length;i++){
	tasks[i].addEventListener('click', function(t) {
  if (t.target.tagName === 'LI') {
    t.target.classList.toggle('checked');
  }
});
}

