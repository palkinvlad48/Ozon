import renderCart from './renderCart'
import postData from './postData'

const cart = () => {
  const cartBtn = document.getElementById('cart')
  const cartModal = document.querySelector('.cart')
  const cartCloseBtn = cartModal.querySelector('.cart-close')
  const cartTotal = cartModal.querySelector('.cart-total > span')
  const goodsWrapper = document.querySelector('.goods')
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartSendBtn = document.querySelector('.cart-confirm')
  //console.log('cartTotal', cartTotal)

  const openCart = () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : []

    cartModal.style.display = 'flex'
    renderCart(cart)
    console.log('openCart:', cart)
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)
  }

  const closeCart = () => {
    cartModal.style.display = 'none'
  }

  cartBtn.addEventListener('click', openCart)

  cartCloseBtn.addEventListener('click', closeCart)

  goodsWrapper.addEventListener('click', (ev) => {
    const target = ev.target
    if (target.classList.contains('btn-primary')) {
      const card = target.closest('.card')
      const key = card.dataset.key
      const goods = JSON.parse(localStorage.getItem('goods'))
      //console.log('goods:', card)
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []
      console.log('cart:', cart)
      const goodItem = goods.find((item) => {
        return item.id === +key
      })
      cart.push(goodItem)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  })

  cartWrapper.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []
      const card = ev.target.closest('.card')
      const key = card.dataset.key
      console.log(key)
      const index = cart.findIndex((item) => {
        return item.id === +key
      })
      cart.splice(index, 1)

      localStorage.setItem('cart', JSON.stringify(cart))

      renderCart(cart)
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)
    }
  })

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : []
    console.log('cartSendBtn', cart)
    postData(cart).then(() => {
      localStorage.setItem('cart', JSON.stringify([]))
      renderCart([])

      cartTotal.textContent = 0
    })
    closeCart()
  })
}

export default cart