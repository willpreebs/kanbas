import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: { name: "New Assignment 123", description: "New Description" },
};

const getRelevantId = (assignment) => {
  if (assignment._id.$oid) {
    return assignment._id.$oid;
  }
  else {
      return assignment._id;
  }
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => getRelevantId(assignment) !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (getRelevantId(assignment) === getRelevantId(action.payload)) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
