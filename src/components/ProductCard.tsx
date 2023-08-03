import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { client } from "@@/sanity/lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'


const ProductCard = ({ title, price, clothingCategory, linkText, picture }: { title: string, price: string, clothingCategory: string, linkText: string, picture: any, }) => {

    const builder = imageUrlBuilder(client)
    function urlFor(source: any) {
        return builder.image(source)
    }

    return (
        <Link href={`/products/${linkText}`}>
            <Card className="hover:scale-110 transition">
                <CardHeader>
                    <Image src={urlFor(picture).url()} alt={title} width={250} height={270} style={{ width: "auto" }} />
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-lg">{clothingCategory}</CardDescription>
                    <h2 className="font-bold text-xl">{`$ ${price}.00`}</h2>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProductCard
