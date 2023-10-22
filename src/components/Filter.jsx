import { h } from "preact"
import { useState } from "preact/hooks"
import styles from "../styles.css"
import { Button } from "@create-figma-plugin/ui"
import { emit } from "@create-figma-plugin/utilities"

FilterLabels = {
  Must_Be_Named: "Name",
  Must_Use_Spacing_Tokens: "Spacing",
  Must_Use_Autolayout: "Autolayout",
  Should_Avoid: "Avoid",
}
export const Filter = ({ filter, setFilter, result }) => {
  return (
    <div className={styles["filter"]}>
      <div className={styles["filter-tags"]}>
        {Object.keys(result).map((item, index) => {
          return (
            <FilterItem
              item={item}
              filter={filter}
              setFilter={setFilter}
              label={FilterLabels[item]}
              length={result[item].length}
            />
          )
        })}
      </div>
    </div>
  )
}

const FilterItem = ({ item, filter, setFilter, label, length }) => {
  const handleFilterItemClick = () => {
    setFilter({
      ...filter,
      [item]: { active: !filter[item].active },
    })
  }
  return (
    <div
      className={`${styles["filter-item"]} ${
        filter[item].active && styles["filter-item-active"]
      }`}
      onClick={handleFilterItemClick}
    >
      {label}({length})
    </div>
  )
}
