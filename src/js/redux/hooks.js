import { loadAllProductsData } from './actions/productsActions'

export const loadAllProducts = ({ dispatch }) => {
  dispatch(loadAllProductsData())
}
