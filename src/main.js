import { on, showUI, traverseNode } from "@create-figma-plugin/utilities"

import { LINTTYPES, CRITERIA } from "./data"
export default function () {
  on("START", handleStart)
  on("SELECT_TARGET", handleSelectTarget)
  showUI({
    height: 480,
    width: 360,
  })
}

const handleStart = () => {
  let result = {
    Should_Avoid: [],
    Must_Be_Named: [],
    Must_Use_Autolayout: [],
    Must_Use_Spacing_Tokens: [],
  }
  const selectionArr = figma.currentPage.selection

  if (selectionArr) {
    selectionArr.map((selection) => {
      traverseNode(selection, (node) => {
        if (LINTTYPES.includes(node.type)) {
          lint(node, result)
        }
      })
    })
  }

  // console.log(result)
  showUI(
    {
      height: 480,
      width: 360,
    },
    result
  )
}

const lint = (node, result) => {
  //should avoid
  if (CRITERIA["Should_Avoid"].includes(node.type)) {
    result["Should_Avoid"].value.push({
      type: "Should Avoid",
      node: { id: node.id, name: node.name, type: node.type },
      message: `Try not to use ${node.type}, use frame with autolayout instead`,
    })
    return
  }
  //must be named
  if (CRITERIA["Must_Be_Named"].includes(node.type)) {
    if (node.name.includes("Frame")) {
      result["Must_Be_Named"].push({
        type: "Should Be Named",
        node: { id: node.id, name: node.name, type: node.type },
        message: `Missing frame name`,
      })
    }
  }
  //must use autolayout
  if (CRITERIA["Must_Use_Autolayout"].includes(node.type)) {
    if (node.layoutMode === "NONE" && node.children[0].type !== "VECTOR") {
      //if not using autolayout and not an instance of icon, push results
      result["Must_Use_Autolayout"].push({
        type: "Must Use Autolayout",
        node: { id: node.id, name: node.name, type: node.type },
        message: `Should use autolayout`,
      })
    } else {
      //if using autolayout, check if using spacing tokens
      if (
        node["itemSpacing"] !== 0 &&
        node["primaryAxisAlignItems"] !== "SPACE_BETWEEN"
      ) {
        if (node.boundVariables["itemSpacing"] === undefined) {
          result["Must_Use_Spacing_Tokens"].push({
            type: "Must Use Spacing Tokens",
            node: { id: node.id, name: node.name, type: node.type },
            message: `itemSpacing variable is not assigned`,
          })
        }
      }
      ;["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"].map(
        (type) => {
          if (node[type] !== 0) {
            if (node.boundVariables[type] === undefined) {
              result["Must_Use_Spacing_Tokens"].push({
                type: "Must Use Spacing Tokens",
                node: { id: node.id, name: node.name, type: node.type },
                message: `${type} variable is not assigned`,
              })
            }
          }
        }
      )
    }
  }
}

const handleSelectTarget = (id) => {
  const node = figma.getNodeById(id)
  figma.currentPage.selection = [node]
}
