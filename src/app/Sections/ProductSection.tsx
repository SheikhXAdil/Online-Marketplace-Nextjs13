import { getProductData } from "@/app/(products)/products/page";
import ProductsSwiper from "@/components/ProductsSwiper";
import { Product } from "@/utils/Products";




const ProductSection = async () => {

    const Products: Product[] = await getProductData()

    return (
        <section className='w-10/12 mx-auto flex flex-col gap-10'>

            {/* Heading */}
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-[#0062F5] font-bold text-sm'>PROMOTIONS</h2>
                <h3 className='text-4xl font-bold'>Our Promotions Events</h3>
            </div>

            {/* Product Swiper */}
            <div>
                <ProductsSwiper Products={Products} />
            </div>
        </section>
    )
}

export default ProductSection
