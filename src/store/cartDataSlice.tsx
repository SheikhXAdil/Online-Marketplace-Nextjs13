import { Cart } from '@/lib/drizzle';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CartDatAState {
    data: Cart[]
}

// Define the initial state using that type
const initialState: CartDatAState = {
    data: []
}

export const cartDataSlice = createSlice({
    name: 'cartData',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setCartData: (state, action: PayloadAction<Cart[]>) => {
            state.data = action.payload
        }
    }
})

export const cartDataActions = cartDataSlice.actions

//  Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartDataSlice.reducer