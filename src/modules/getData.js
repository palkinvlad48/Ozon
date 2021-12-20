const getData = () => {
  //'https://jsonplaceholder.typicode.com/posts/1') ('http://localhost:3000/goods')
  //return fetch(`https://test-9d858-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : '' }`) можно бы было с json-server

  return fetch(`https://test-9d858-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
      return response.json()
    })

}

export default getData