// Composables for product pages — re-exports from productRoutes for auto-import.
// Product data is fetched via /api/products (server-only), not bundled into client JS.
import {
  PRODUCT_PAGE_SIZE,
  productPageUrl,
  productListApiPath,
  getTotalPages
} from '~/data/productRoutes'

export { PRODUCT_PAGE_SIZE, productPageUrl, productListApiPath, getTotalPages }
