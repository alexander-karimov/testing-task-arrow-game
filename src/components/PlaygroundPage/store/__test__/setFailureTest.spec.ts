import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setFailure,
} from "../slices"

describe("initial setFailure", () => {
  it("test setFailure", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setFailureState = playgroundReducer(setStepsState, setFailure())

    expect(setFailureState.totalFailure).toBe(1)
    expect(setFailureState.steps[0].success).toBe(false)
  })
})
