import { Image } from "@sanity/types"

export const urlFormat = (str: string) => {
    let formattedStr = str.replaceAll(" ", "-")
    return formattedStr
}


export interface Product {
    clothingCategory: string,
    price: number,
    imagesGallery: Image[],
    id: number,
    name: string,
    catagory: string
}

export const checkEnvironment = () => {
    let base_url =
        process.env.VERCEL_ENV === "development"
            ? "http://localhost:3000"
            : "https://online-marketplace-adil.vercel.app";
    return base_url;
};

