import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Stack,
  Text,
  Tabs,
  TextboxNumeric,
  VerticalSpace,
  SegmentedControl,
  IconLayerFrame16,
  IconLayerInstance16,
  IconLayerGroup16,
  IconLayerComponent16,
  IconTarget16,
  IconSwap32,
} from "@create-figma-plugin/ui"
import { emit } from "@create-figma-plugin/utilities"
import { h } from "preact"
import { useCallback, useEffect, useState, useRef } from "preact/hooks"
import { Filter } from "../components/filter"
import styles from "../styles.css"

export const Result = ({ result }) => {
  const convertResultToFilter = (array, result) => {
    const initialValue = {}
    array.map((item) => {
      initialValue[item] = {
        value: item,
        active: result[item].length > 0,
      }
    })

    return initialValue
  }

  const [filter, setFilter] = useState(
    convertResultToFilter(Object.keys(result), result)
  )
  const handleLintAgainClick = () => {
    emit("START")
  }

  return (
    <Stack>
      <Filter
        filter={filter}
        setFilter={setFilter}
        result={result}
      />

      <div className={styles["results"]}>
        {Object.keys(result)
          .filter((item) => {
            return filter[item].active
          })
          .map((criteria, index) => {
            return result[criteria].map((item, index) => {
              return <ResultItem item={item} />
            })
          })}
      </div>

      <div
        className={styles["run-again-button"]}
        onClick={handleLintAgainClick}
      >
        <IconSwap32 />
      </div>
    </Stack>
  )
}

const ResultItem = ({ item }) => {
  const handleTargetClick = () => {
    emit("SELECT_TARGET", item.node.id)
  }
  return (
    <div
      className={styles["result-item"]}
      onClick={handleTargetClick}
    >
      <div className={styles["result-left"]}>
        {item.node.type === "FRAME" && <IconLayerFrame16 />}
        {item.node.type === "INSTANCE" && <IconLayerInstance16 />}
        {item.node.type === "GROUP" && <IconLayerGroup16 />}
        {item.node.type === "COMPONENT" && <IconLayerComponent16 />}
      </div>
      <div className={styles["result-right"]}>
        <div className={styles["result-name"]}>{item.node.name}</div>
        <div className={styles["result-message"]}>{item.message}</div>
      </div>
      <IconTarget16 />
    </div>
  )
}
