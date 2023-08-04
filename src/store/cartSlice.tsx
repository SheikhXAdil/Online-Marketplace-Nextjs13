import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '@/store/store'

// Define a type for the slice state
export interface CartState {
    totalQuantity: number,
    fetchCartCount: boolean
}

// Define the initial state using that type
const initialState: CartState = {
    totalQuantity: 0,
    fetchCartCount: true
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: state => {
            state.totalQuantity += 1,
                state.fetchCartCount = true

        },
        removeFromCart: state => {
            state.totalQuantity -= 1,
                state.fetchCartCount = true
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setinitialCartAmount: (state, action: PayloadAction<number>) => {
            state.totalQuantity = action.payload,
                state.fetchCartCount = false
        }
    }
})

export const cartActions = cartSlice.actions

//  Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer