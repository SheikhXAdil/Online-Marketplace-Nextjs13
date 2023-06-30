"use client"
import ProductCard from "@/components/ProductCard";
import { getProductData } from "../products/page";
import { Product, urlFormat } from "@/utils/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";



const ProductSection = async () => {

    const Products: Product[] = await getProductData()

    return (
        <section className='w-10/12 mx-auto flex flex-col gap-10'>
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-[#0062F5] font-bold text-sm'>PROMOTIONS</h2>
                <h3 className='text-4xl font-bold'>Our Promotions Events</h3>
            </div>

            <div>
                <div className="">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            800: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 4
                            }
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }
                        }
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {Products.map((product) => {
                            return (
                                <div key={product.id} className="w-full sm:w-1/3 flex items-center justify-center">
                                    <SwiperSlide>
                                        <ProductCard key={product.id} title={product.name} clothingCategory={product.clothingCategory} linkText={urlFormat(product.name)} price={String(product.price)} picture={product.imagesGallery[0]} />
                                    </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ProductSection
