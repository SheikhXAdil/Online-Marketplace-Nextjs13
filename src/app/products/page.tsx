import ProductCard from "@/components/ProductCard"
import { Product, urlFormat } from "@/utils/Products"
import { client } from "@@/sanity/lib/sanityClient"

export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        id,
        name,
        catagory,
        clothingCategory,
        price,
        imagesGallery
      }`);
    return res;
}

const Products = async () => {

    const data: Product[] = await getProductData()
    // console.log(data)

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto">
                {data.map((product) => {
                    return (
                        <ProductCard key={product.id} title={product.name} clothingCategory={product.clothingCategory} linkText={urlFormat(product.name)} price={String(product.price)} picture={product.imagesGallery[0]} />
                    )
                })}
            </div>
        </div>
    )
}

export default Products
