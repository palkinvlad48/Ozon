import getData from "./getData"
import renderGoods from "./renderGoods"
import { hotSaleFilter, priceFilter } from "./filters"

const filter = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')
  const checkboxInput = document.getElementById('discount-checkbox')
  const checkboxSpan = document.querySelector('.filter-check_checkmark')
  console.log('p' + minInput.value + 'p')
  minInput.addEventListener('input', () => {
    console.log(minInput.value)
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, minInput.value, maxInput.value)))
    })
  })

  maxInput.addEventListener('input', () => {
    console.log(typeof maxInput.value)
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, minInput.value, maxInput.value)))
    })
  })

  checkboxInput.addEventListener('change', () => {
    if (checkboxInput.checked) {
      checkboxSpan.classList.add('checked')
    } else {
      checkboxSpan.classList.remove('checked')
    }

    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked)))
    })
  })

}


export default filter