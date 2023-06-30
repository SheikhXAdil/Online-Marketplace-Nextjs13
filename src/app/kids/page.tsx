import ProductCard from "@/components/ProductCard"
import { getProductData } from "../products/page"
import { Product, urlFormat } from "@/utils/Products"

const Kids = async () => {

    const data: Product[] = await getProductData()

    const kidsProducts = data.filter((product) => product.catagory === "kids")

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto">
                {kidsProducts.map((product) => {
                    return (
                        <ProductCard key={product.id} title={product.name} clothingCategory={product.clothingCategory} linkText={urlFormat(product.name)} price={String(product.price)} picture={product.imagesGallery[0]} />
                    )
                })}
            </div>
        </div>
    )
}

export default Kids
