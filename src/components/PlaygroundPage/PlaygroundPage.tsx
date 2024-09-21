import React, { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setFailure, setSteps } from "./store/slices"
import Controls from "./components/Controls/Controls"
import { END_GAME_STATUS, INTERVAL_TIME } from "./constants"
import RandomKeys from "./components/RandomKeys/RandomKeys"
import KeyPressed from "./components/KeyPressed/KeyPressed"
import Score from "./components/Score/Score"
import Modal from "./components/Modal/Modal"
import Description from "./components/Description/Description"
import styles from "./PlaygroundPage.module.css"

const Playground: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setFailure())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as any)
    }

    return () => clearInterval(refreshIntervalId.current as any)
  }, [isTimerActive, dispatch])

  useEffect(() => {
    const isSuccessful = state.totalSuccessful === END_GAME_STATUS.SUCCESS_COUNT
    const isFailure = state.totalFailure === END_GAME_STATUS.FAILURE_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isFailure && setIsSuccessEndGame(false)

    if (isFailure || isSuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalFailure, state.totalSuccessful])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>
      <div className={styles.box}>
        {" "}
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
