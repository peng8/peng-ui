import type { Product } from './products'
import { importedGummiesProducts } from './imported-products/gummies'
import { importedSoftgelsProducts } from './imported-products/softgels'
import { importedTabletsProducts } from './imported-products/tablets'
import { importedHardCapsuleProducts } from './imported-products/hard-capsules'
import { importedPowderProducts } from './imported-products/powders'
import { importedLiquidDropProducts } from './imported-products/liquid-drops'

export const importedProducts: Product[] = [
  ...importedGummiesProducts,
  ...importedSoftgelsProducts,
  ...importedTabletsProducts,
  ...importedHardCapsuleProducts,
  ...importedPowderProducts,
  ...importedLiquidDropProducts
]
