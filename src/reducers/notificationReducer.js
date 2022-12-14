import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: null,
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      return message;
    },
  },
});

// const newNotification =(message,timeLimit)=>{

// }

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
