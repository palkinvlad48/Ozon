const postData = (cart) => {
  
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'Content-Type': 'applocation/json; charset=UTF-8',
    },
  })
    .then(res => res.json())

}

export default postData