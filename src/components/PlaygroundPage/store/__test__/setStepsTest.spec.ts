import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("initial setSteps", () => {
  it("test setSteps", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())
    expect(initialState.steps.length).toEqual(0)
    expect(setStepsState.steps.length).toEqual(1)
  })
})
