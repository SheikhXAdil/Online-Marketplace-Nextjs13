export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'catagory',
            type: 'string',
            title: 'Product Catagory',
            options: {
                list: [
                    { title: 'Female', value: 'female' },
                    { title: 'Male', value: 'male' },
                    { title: 'Kids', value: 'kids' }
                ],
            }
        },
        {
            name: 'clothingCategory',
            type: 'string',
            title: 'Product Clothing Catagory',
            options: {
                list: [
                    { title: 'Sweater', value: 'Sweater' },
                    { title: 'Dress', value: 'Dress' },
                    { title: 'Jackets', value: 'Jackets' },
                    { title: 'T Shirts', value: 'T Shirts' },
                    { title: 'Pants', value: 'Pants' }
                ],
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'imagesGallery',
            title: 'Product Pictures',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'id',
            type: 'number',
            title: 'ID'
        }
    ]
}