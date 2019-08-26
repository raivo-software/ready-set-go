const gameObject = {
  name: 'object2',
  children: [
    {
      name: 'object2',
      children: [
        {
          name: 'object2',
          children: []
        }
      ]
    },
    {
      name: 'object2',
      children: []
    }
  ]
}

const treeSearch = (obj, name, accumulator) => {
  if(obj.name === name)
    accumulator.push(obj);
  obj.children.forEach(x => treeSearch(x, name, accumulator));
  return accumulator;
}

console.log('treesearch object2', treeSearch(gameObject, 'object2', []));