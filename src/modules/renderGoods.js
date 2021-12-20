const renderGoods = (goods) => {
  const goodsWrapper = document.querySelector('.goods')

  localStorage.setItem('goods', JSON.stringify(goods))

  goodsWrapper.innerHTML = ''

  goods.forEach(goodsItem => {
    let imgCurr = goodsItem.img
    let imgNo = "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg"//'C:/GloAk/Ozon_JS_1221/src/modules/image_182.jpg'
    // 'https://cdn1.ozone.ru/multimedia/c400/102538227.jpg' -> 404?
    // 'https://cdn1.ozone.ru/multimedia/c400/102538725.jpg' -> 404?

    if (!imgCurr) {
      console.log('Нет рисунка')
    }  //else { console.log(imgCurr) }
    goodsWrapper.insertAdjacentHTML('beforeend', `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
								<div class="card" data-key="${goodsItem.id}">
                  ${(goodsItem.sale) ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
									<div class="card-img-wrapper">
										<span class="card-img-top" style="background-image: url(${(imgCurr) ? goodsItem.img : imgNo})"  alt="${goodsItem.title}"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price">${goodsItem.price} ₽</div>
										<h5 class="card-title">${goodsItem.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
							</div>
    `)
  });

}

export default renderGoods