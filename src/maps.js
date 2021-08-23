/* Messing Around with Maps */

// instantiate newMap
const newMap = new Map();
console.log('newMap: ', newMap) // newMap(0) {}

//============================
//======INSTANCE METHODS======
//============================

// set
newMap.set('Graham', 'needs job');
newMap.set('Matthew', {'age': 32, 'profession': 'musician'})
console.log('newMap: ', newMap); /* Map(2) {
  'Graham' => 'needs job',
  'Matthew' => { age: 32, profession: 'musician' }
  */

console.log('newMap Size: ', newMap.size); // 2

// has
console.log(newMap.has(5)); // false
console.log(newMap.has('Matthew')); // true
console.log(newMap.has('Graham')); // true

// get
console.log(newMap.get('Graham')); // needs job
console.log(newMap.get('Matthew')); // {'age': 32, 'profession': 'musician'})

// delete
console.log(newMap.delete('Matthew')); // true
console.log(newMap.delete('Something Random')); // false
console.log('After Delete: ', newMap); //  Map(1) 'Graham' => 'needs job'
console.log('newMap Size: ', newMap.size); // 1

// clear
newMap.set(1, 1)
newMap.set(2, 2)
newMap.set(3, 3)
newMap.set(4, 4)
console.log('newMap Size: ', newMap.size); // 5
newMap.clear();
console.log('newMap Size: ', newMap.size); // 0

//==========================
//====INTERATION METHODS====
//==========================

const iterationMap = new Map();

iterationMap.set('a', 1);
iterationMap.set('b', 2);
iterationMap.set('c', 3);
iterationMap.set('d', 4);
console.log(iterationMap.keys()); // { 'a', 'b', 'c', 'd' }
console.log(iterationMap.values()); // { 1, 2, 3, 4 }
console.log(iterationMap.entries()); // { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] }


//==========================
//====WITH ARRAY OBJECTS====
//==========================

const grahamArray = [['Summer Camp', 'Illinois'], ['Coachella', 'California'], ['Global', 'Colorado']]

const musicMap = new Map(grahamArray);
console.log('musicMap: ', musicMap) // Map(3) { 'Summer Camp' => 'Illinois', 'Coachella' => 'California', 'Global' => 'Colorado' }

console.log(musicMap.get('Summer Camp')) // Illinois

console.log(Array.from(musicMap)); // exact same array as grahamArray
console.log('spread like butter: ', [...musicMap]); // quicker way to do so, using the spread