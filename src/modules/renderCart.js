const renderCart = (goods) => {
  const cartWrapper = document.querySelector('.cart-wrapper')

  cartWrapper.innerHTML = ''

  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML('beforeend', `
        <div id="cart-empty">
        Ваша корзина пуста
        </div>
      `)
  } else {
    goods.forEach((goodsItem) => {
      // let imgCurr = goodsItem.hoverImg

      // if (!imgCurr) {
      //   console.log('Нет рисунка')
      // } //else { console.log(imgCurr) }

      cartWrapper.insertAdjacentHTML('beforeend', `
			<div class="card" data-key="${goodsItem.id}">
        ${(goodsItem.sale) ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
				<div class="card-img-wrapper">
					<span class="card-img-top" style="background-image: url(${goodsItem.img})" alt="${goodsItem.title}">
          </span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${goodsItem.price} ₽</div>
					<h5 class="card-title">${goodsItem.title}</h5>
					<button class="btn btn-primary">Удалить</button>
				</div>
			</div>	
    `)
    });
  }
}
export default renderCart