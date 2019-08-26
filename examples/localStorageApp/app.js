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

const json = JSON.stringify(gameObject);

window.localStorage.setItem('jonkinniminenjson', json);

const jsonData = JSON.parse(json);

