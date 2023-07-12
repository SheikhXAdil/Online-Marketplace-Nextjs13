'use client'
import ProductDetails from "@/components/ProductDetails"
import { getProductData } from "../page"
import { Product, urlFormat } from "@/utils/Products"
import { useState, useEffect } from "react"


export async function generateStaticParams() {

    const data: Product[] = await getProductData()

    return data.map((product) => ({
        slug: urlFormat(product.name),
    }))
}

const Product = ({ params }: { params: { slug: string } }) => {

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: Product[] = await getProductData();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const productArr = data.filter((product) => urlFormat(product.name) === params.slug)



    return (
        productArr.map((product) => {
            return (
                <ProductDetails key={product.id} title={product.name} price={product.price} clothingCategory={product.clothingCategory} pictures={product.imagesGallery} />
            )
        })
    )
}

export default Product
