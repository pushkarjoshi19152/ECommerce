
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action) => {
            // console.log("Prev", state);
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    idn: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)

            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            })

            // console.log("After", state);
            // console.log(newItem);



        }

    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer