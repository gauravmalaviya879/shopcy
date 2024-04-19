import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
    grandTotal:0
  },
  reducers: {
    addtocart: (state,action) => {

       action.payload.qty = 1
       action.payload.total = action.payload.price
       let temp = [...state.data,action.payload]
       state.data = temp
   
        let gTotal = 0
       temp.map((item)=>{
          gTotal += item.total
       })
       state.grandTotal = gTotal

    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = counterSlice.actions

export default counterSlice.reducer