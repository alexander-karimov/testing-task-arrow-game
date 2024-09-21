import playgroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("initial resetStore", () => {
  it("test resetStore", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreState = playgroundReducer(setCurrentStepState, resetStore())

    expect(resetStoreState).toEqual(initialState)
  })
})
