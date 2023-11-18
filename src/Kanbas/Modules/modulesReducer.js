import { createSlice } from "@reduxjs/toolkit";
// import db from "../Database";

const initialState = {
  modules: [],
  module: { name: "New Module 123", description: "New Description" },
};

const getRelevantId = (module) => {
  if (module._id.$oid) {
    return module._id.$oid;
  }
  else {
      return module._id;
  }
}

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => getRelevantId(module) !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (getRelevantId(module) === getRelevantId(action.payload)) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
