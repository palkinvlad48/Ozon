export const searchFilter = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.title.toUpperCase().includes(value.toUpperCase())
  })

}

export const categoryFilter = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })

}

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === '' && max === '') {
      return goodsItem
    } else if (min !== '' && max !== '') {
      return goodsItem.price > +min && goodsItem.price < +max
    } else if (min !== '' && max === '') {
      return goodsItem.price > +min
    } else if (min === '' && max !== '') {
      return goodsItem.price < +max
    }

  })

}
// по акциям
export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true
    } else {
      return goodsItem
    }
  })
}
