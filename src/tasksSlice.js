import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addPerson: (state, action)=>{
            // console.log(action.payload,'ttt');
            const newTask = {
                id: new Date(),
                fullName: action.payload.task.fullName,
                address: action.payload.task.address,
                pinCode: action.payload.task.pinCode,
                phone: action.payload.task.phone,
                highestEducation: action.payload.task.highestEducation,
                passingYear: action.payload.task.passingYear,
            }
            state.push(newTask);
        }
       
    }
});

export const {addPerson} = tasksSlice.actions;

export default tasksSlice.reducer;