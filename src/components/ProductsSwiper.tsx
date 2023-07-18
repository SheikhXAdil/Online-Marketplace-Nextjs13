"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import ProductCard from "@/components/ProductCard";
import { Product, urlFormat } from "@/utils/Products";



const ProductsSwiper = ({ Products }: { Products: Product[] }) => {
    return (
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
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }
            }
            modules={[Autoplay]}
            className="mySwiper"
        >
            {Products.map((product, index) => {
                return (
                    <div key={index} className="w-full sm:w-1/3 flex items-center justify-center">
                        <SwiperSlide>
                            <ProductCard key={product.id} title={product.name} clothingCategory={product.clothingCategory} linkText={urlFormat(product.name)} price={String(product.price)} picture={product.imagesGallery[0]} />
                        </SwiperSlide>
                    </div>
                )
            })}
        </Swiper>
    )
}

export default ProductsSwiper
