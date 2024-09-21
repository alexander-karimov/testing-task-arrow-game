import { IEndGameStatus, IMapArrowCodes } from "./types"

export const INTERVAL_TIME: number = 1000 * 2

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
}

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

export const END_GAME_STATUS: IEndGameStatus = {
  SUCCESS_COUNT: 5,
  FAILURE_COUNT: 3,
}
