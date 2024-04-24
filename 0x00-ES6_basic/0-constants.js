export function taskFirst() {
<<<<<<< HEAD
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

=======
const task = 'I prefer const when I can.';
return task;
}

export function getLast() {
return ' is okay';
}

export function taskNext() {
let combination = 'But sometimes let';
combination += getLast();

return combination;
}
>>>>>>> cacecd341ba213d1cd75469924a2ea8fd4402056
