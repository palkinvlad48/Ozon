import getData from "./getData"

const second = () => {
  const cartBtn = document.getElementById('cart')

  getData()
    .then((data) => {
      console.log('Данные_1:', data)
    })

}

export default second