import { on, showUI, traverseNode } from "@create-figma-plugin/utilities"

import { LINTTYPES, CRITERIA, IGNORE } from "./data"

const initialOptions = {
  avoid: true,
  named_frames: true,
  auto_layout: true,
  padding: true,
  gap: true,
  fill: true,
  stroke: true,
  corner_radius: true,
}

export default async function () {
  on("START", handleStart)
  on("SELECT_TARGET", handleSelectTarget)
  on("SAVE", handleSave)

  if ((await figma.clientStorage.getAsync("options")) === undefined) {
    await figma.clientStorage.setAsync("options", initialOptions)
  }
  const options = await figma.clientStorage.getAsync("options")

  const data = {
    result: {},
    options: options,
  }
  showUI(
    {
      height: 480,
      width: 360,
    },
    data
  )
}

const handleSave = async (criteria) => {
  await figma.clientStorage.setAsync("options", criteria)
}
const handleStart = async () => {
  let result = {
    Should_Avoid: [],
    Must_Be_Named: [],
    Must_Use_Autolayout: [],
    Must_Use_Spacing_Tokens: [],
    Must_Use_Fill_Variable: [],
    Must_Use_Stroke_Variable: [],
    Must_Use_Radius_Variable: [],
  }
  const options = await figma.clientStorage.getAsync("options")
  const selectionArr = figma.currentPage.selection

  if (selectionArr) {
    const notIgnoreComponents = (node) => {
      let shouldNotIgnore = true

      IGNORE.Layer.forEach((name) => {
        shouldNotIgnore = shouldNotIgnore && !node.name.includes(name)
      })
      return shouldNotIgnore
    }

    selectionArr.map((selection) => {
      traverseNode(selection, (node) => {
        if (LINTTYPES.includes(node.type) && notIgnoreComponents(node)) {
          lint(node, result, options)
        }
      })
    })
  }
  const data = {
    result: result,
    options: options,
  }

  showUI(
    {
      height: 480,
      width: 360,
    },
    data
  )
}

const lint = (node, result, options) => {
  //should avoid
  if (CRITERIA["Should_Avoid"].includes(node.type) && options.avoid) {
    result["Should_Avoid"].push({
      type: "Should Avoid",
      node: { id: node.id, name: node.name, type: node.type },
      message: `Try not to use ${node.type}, use frame with autolayout instead`,
    })
    return
  }
  //must be named
  if (CRITERIA["Must_Be_Named"].includes(node.type) && options.named_frames) {
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
    if (
      node.layoutMode === "NONE" &&
      node.children.length > 0 &&
      node.children[0].type !== "VECTOR" &&
      options.auto_layout
    ) {
      //if not using autolayout and not an instance of icon, push results
      result["Must_Use_Autolayout"].push({
        type: "Must Use Autolayout",
        node: { id: node.id, name: node.name, type: node.type },
        message: `Should use autolayout`,
      })
    } else {
      //if using autolayout, check if using gap tokens
      if (
        node["itemSpacing"] !== 0 &&
        node["primaryAxisAlignItems"] !== "SPACE_BETWEEN"
      ) {
        if (node.boundVariables["itemSpacing"] === undefined && options.gap) {
          result["Must_Use_Spacing_Tokens"].push({
            type: "Must Use Spacing Tokens",
            node: { id: node.id, name: node.name, type: node.type },
            message: `itemSpacing variable is not assigned`,
          })
        }
      }

      //if using autolayout, check if using padding tokens
      ;["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"].map(
        (position) => {
          if (node[position] !== 0) {
            if (
              node.boundVariables[position] === undefined &&
              options.padding
            ) {
              result["Must_Use_Spacing_Tokens"].push({
                type: "Must Use Spacing Tokens",
                node: { id: node.id, name: node.name, type: node.type },
                message: `${position} variable is not assigned`,
              })
            }
          }
        }
      )
    }
  }
  //must use variables
  if (CRITERIA["Must_Use_Variable"].includes(node.type)) {
    const isSolidFill = (node) => {
      let bool = true
      node.fills.forEach((fill) => {
        bool = bool && fill.type === "SOLID"
      })

      return bool
    }
    //check fill
    if (
      node.fills.length > 0 &&
      (node.boundVariables.fills === undefined ||
        node.boundVariables.fills.length < node.fills.length) &&
      isSolidFill(node) &&
      options.fill
    ) {
      result["Must_Use_Fill_Variable"].push({
        type: "Must Use Fill Variable",
        node: { id: node.id, name: node.name, type: node.type },
        message: `Fill variable is not assigned`,
      })
    }
    //check stroke
    if (
      node.strokes.length > 0 &&
      (node.boundVariables.strokes === undefined ||
        node.boundVariables.strokes.length < node.strokes.length) &&
      options.stroke
    ) {
      result["Must_Use_Stroke_Variable"].push({
        type: "Must Use Stroke Variable",
        node: { id: node.id, name: node.name, type: node.type },
        message: `Stroke variable is not assigned`,
      })
    }
    //check corner radius
    ;[
      "bottomLeftRadius",
      "bottomRightRadius",
      "topLeftRadius",
      "topRightRadius",
    ].map((position) => {
      if (
        node[position] !== 0 &&
        node.boundVariables[position] === undefined &&
        options.corner_radius
      ) {
        result["Must_Use_Radius_Variable"].push({
          type: "Must Use Variable Tokens",
          node: { id: node.id, name: node.name, type: node.type },
          message: `${position} variable is not assigned`,
        })
      }
    })
  }
}

const handleSelectTarget = (id) => {
  const node = figma.getNodeById(id)
  figma.currentPage.selection = [node]
}
