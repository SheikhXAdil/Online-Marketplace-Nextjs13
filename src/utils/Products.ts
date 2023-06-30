import { Image } from "@sanity/types"

export const urlFormat = (str: string) => {
    let formattedStr = str.replaceAll(" ", "-")
    return formattedStr
}


export type product = {
    id: string,
    linkText: string,
    title: string,
    category: string,
    clothingCategory: string,
    price: string,
    pictures: string[]
}

export interface Product {
    clothingCategory: string,
    price: number,
    imagesGallery: Image[],
    id: number,
    name: string,
    catagory: string
}

