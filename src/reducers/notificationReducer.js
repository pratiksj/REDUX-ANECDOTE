import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: null,
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      return message;
    },
    removeMessage() {
      return null;
    },
  },
});

// const newNotification =(message,timeLimit)=>{

// }

export const { setMessage, removeMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
