/*
Object.entries,
Object.keys
Object.values
*/

const gameObject = {
  id: 1,
  name: 'jokunimi',
  jokuMuuProperty: {
    id: 2,
    child: [
      {id: 3},
      {id: 4}
    ]
  }
};

Object.entries(gameObject).forEach(([key, value]) => console.log('key,value pari', key, value));

const name = Object.keys(gameObject).find(x => x === 'name');
if(name)
  console.log('name exists!', name);

Object.values(gameObject).forEach(x => console.log(x));