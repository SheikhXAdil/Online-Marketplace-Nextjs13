import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '@/store/store'

// Define a type for the slice state
export interface userSlice {
    userid: string,
    // fetchCartCount: boolean
}

// Define the initial state using that type
const initialState: userSlice = {
    userid: "",
    // fetchCartCount: false
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setUser: (state, action: PayloadAction<string>) => {
            state.userid = action.payload
        }
    }
})

export const userActions = userSlice.actions

//  Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer