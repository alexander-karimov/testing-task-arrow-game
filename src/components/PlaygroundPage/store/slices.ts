import { createSlice } from "@reduxjs/toolkit"
import { IPlaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalFailure: 0,
  totalSuccessful: 0,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)

      state.steps.push({
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        step: state.currentStep,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSuccess = step.currentValue === action.payload

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          }

          if (isSuccess) {
            state.totalSuccessful++
          } else {
            state.totalFailure++
            state.totalSuccessful = 0
          }
        }
      }
    },
    setFailure: (state) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        if (step.enteredValue === null) {
          state.totalFailure++
          state.totalSuccessful = 0

          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
    resetStore: () => initialState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  setFailure,
  resetStore,
} = playgroundSlice.actions
export default playgroundSlice.reducer
