var initialState = [
    {
        id: 1,
        name: 'IP 7 PLUS',
        image: "https://www.duchuymobile.com/images/variant_image/19/iphone-7-plus-rose-gold-thumb.jpg",
        description: 'Sản phẩm của Apple ',
        price: 1000,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'IP XS PLUS',
        image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png",
        description: 'Sản phẩm của Apple ',
        price: 2000,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'SAMSUNG S9',
        image: "https://cdn.tgdd.vn/Products/Images/42/113263/samsung-galaxy-s9-black-400x460-400x460.png",
        description: 'Sản phẩm của SAMSUNG ',
        price: 1500,
        inventory: 30,
        rating: 4
    },
]
const products = (state = initialState, action) => {
    switch (action.type) {

        default:
            return [...state]
    }
}
export default products