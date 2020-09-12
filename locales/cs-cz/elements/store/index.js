import cart from './cart.json';
import category from './category.json';
import compare from './compare.json';
import product from './product.json';
import productSort from './productSort.json';
import productThumb from './productThumb.json';
import wishlist from './wishlist.json';
import productFolder from './product';
export default {
  cart,
  category,
  compare,
  product,
  productSort,
  productThumb,
  wishlist,
  product: { ...product,
    ...productFolder
  }
};
