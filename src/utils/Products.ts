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
    imagesGallery: [[Object]],
    id: number,
    name: string,
    catagory: string
}

export const products: product[] = [
    {
        id: "1",
        title: "Brushed Raglan Sweatshirt",
        linkText: urlFormat("Brushed Raglan Sweatshirt"),
        category: "female",
        clothingCategory: "Sweater",
        price: "$195.00",
        pictures: ["/products/product1_1.png"]
    },
    {
        id: "2",
        title: "Cameryn Sash Tie Dress",
        linkText: urlFormat("Cameryn Sash Tie Dress"),
        category: "female",
        clothingCategory: "Dress",
        price: "$545.00",
        pictures: ["/products/product2_1.png", "/products/product2_2.png", "/products/product2_3.png", "/products/product2_4.png"]
    },
    {
        id: "3",
        title: "Flex Sweatshirt",
        linkText: urlFormat("Flex Sweatshirt"),
        category: "female",
        clothingCategory: "Sweater",
        price: "$175.00",
        pictures: ["/products/product3_1.png"]
    },
    {
        id: "4",
        title: "Flex Sweatpants",
        linkText: urlFormat("Flex Sweatpants"),
        category: "female",
        clothingCategory: "Pants",
        price: "$175.00",
        pictures: ["/products/product4_1.png"]
    },
    {
        id: "5",
        title: "Pink Fleece Sweatpants",
        linkText: urlFormat("Pink Fleece Sweatpants"),
        category: "female",
        clothingCategory: "Pants",
        price: "$195.00",
        pictures: ["/products/product5_1.png"]
    },
    {
        id: "6",
        title: "Lite Sweatpants",
        linkText: urlFormat("Lite Sweatpants"),
        category: "female",
        clothingCategory: "Pants",
        price: "$150.00",
        pictures: ["/products/product6_1.png"]
    },
    {
        id: "7",
        title: "Imperial Alpaca Hoodie",
        linkText: urlFormat("Imperial Alpaca Hoodie"),
        category: "female",
        clothingCategory: "Jackets",
        price: "$525.00",
        pictures: ["/products/product7_1.png"]
    },
    {
        id: "8",
        title: "Flex Push Button Bomber",
        linkText: urlFormat("Flex Push Button Bomber"),
        category: "male",
        clothingCategory: "Jackets",
        price: "$225.00",
        pictures: ["/products/product8_1.png"]
    },
    {
        id: "9",
        title: "Muscle Tank",
        linkText: urlFormat("Muscle Tank"),
        category: "female",
        clothingCategory: "T Shirts",
        price: "$75.00",
        pictures: ["/products/product9_1.png"]
    },
    {
        id: "10",
        title: "Brushed Bomber",
        linkText: urlFormat("Brushed Bomber"),
        category: "female",
        clothingCategory: "Jackets",
        price: "$225.00",
        pictures: ["/products/product10_1.png"]
    },
    {
        id: "11",
        title: "Raglan Sweatshirt",
        linkText: urlFormat("Raglan Sweatshirt"),
        category: "male",
        clothingCategory: "Sweater",
        price: "$195.00",
        pictures: ["/products/product11_1.png"]
    },
    {
        id: "12",
        title: "Loose Control",
        linkText: urlFormat("Loose Control"),
        category: "kids",
        clothingCategory: "T Shirts",
        price: "$110.00",
        pictures: ["/products/product12_1.webp"]
    },
]