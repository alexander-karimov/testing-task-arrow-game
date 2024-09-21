import playgroundReducer, { initialState } from "../slices"

describe("initial initialState", () => {
  it("test initialState", () => {
    const state = playgroundReducer(undefined, { type: "unknown" })

    expect(state).toEqual(initialState)
  })
})
