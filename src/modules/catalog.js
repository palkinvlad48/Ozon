import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryFilter } from "./filters"

const catalog = () => {

  const btnCatalog = document.querySelector('.catalog-button > button')
  const catalogModal = document.querySelector('.catalog')
  const catalogModalItems = document.querySelectorAll('.catalog li')

  btnCatalog.addEventListener('click', () => {
    catalogModal.classList.toggle('visible')
    //style.display = 'block'
  })

  catalogModalItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const text = item.textContent

      getData().then((data) => {
        renderGoods(categoryFilter(data, text))
      })

    })
  })
}

export default catalog