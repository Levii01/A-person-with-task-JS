var task = [
  ['Complete a task for Mace Darek', true],
  ['Kiss princess Leia', false],
  ['Destroy a the Blackstar', true],
  ['Feed Chewbacca', false],
  ['Repair R2D2', false],
  ['Become a real jedi', true],
];

var completeTask = '';

function person(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][1] == true) {
      completeTask += 'Task: ' + array[i][0] + ', status: ' + complete(array[i][1]) + '<br>';
    }
  }
}

function complete(status) {
  if (status) return 'complete!';
}

function showComplete() {
  person(task);
  document.getElementById('task').innerHTML = completeTask;
}
