import playgroundReducer, { initialState, setCurrentStep } from "../slices"

describe("initial setCurrentStep", () => {
  it("test setCurrentStep", () => {
    const state = playgroundReducer(initialState, setCurrentStep())

    expect(initialState.currentStep).toBe(0)
    expect(state.currentStep).toBe(1)
  })
})
