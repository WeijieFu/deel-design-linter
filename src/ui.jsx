import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Stack,
  Text,
  TextboxNumeric,
  VerticalSpace,
} from "@create-figma-plugin/ui"
import { emit } from "@create-figma-plugin/utilities"
import { h } from "preact"
import { useCallback, useEffect, useState, useRef } from "preact/hooks"
import { Home } from "./screens/Home"
import { Result } from "./screens/Result"

import styles from "./styles.css"
function Plugin(data) {
  const handleStartClick = () => {
    emit("START")
  }
  const result = useRef(data.result)

  // useEffect(() => {
  //   console.log(result.current)
  // }, [result.current])
  return (
    <div className={styles["container"]}>
      {Object.keys(result.current).length === 0 && (
        <Home
          handleStartClick={handleStartClick}
          options={data.options}
        />
      )}
      {Object.keys(result.current).length > 0 && (
        <Result result={result.current} />
      )}
    </div>
  )
}

export default render(Plugin)
