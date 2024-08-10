var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@create-figma-plugin/utilities/lib/events.js
function on(name, handler) {
  const id = `${currentId}`;
  currentId += 1;
  eventHandlers[id] = { handler, name };
  return function() {
    delete eventHandlers[id];
  };
}
function invokeEventHandler(name, args) {
  let invoked = false;
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args);
      invoked = true;
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``);
  }
}
var eventHandlers, currentId;
var init_events = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
    eventHandlers = {};
    currentId = 0;
    if (typeof window === "undefined") {
      figma.ui.onmessage = function(args) {
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = args;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    } else {
      window.onmessage = function(event) {
        if (typeof event.data.pluginMessage === "undefined") {
          return;
        }
        const args = event.data.pluginMessage;
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = event.data.pluginMessage;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    }
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/traverse-node.js
function traverseNode(node, processNode, stopTraversal) {
  if (node.removed === true) {
    return;
  }
  if ("children" in node && (typeof stopTraversal !== "function" || stopTraversal(node) === false)) {
    for (const childNode of node.children) {
      traverseNode(childNode, processNode, stopTraversal);
    }
  }
  processNode(node);
}
var init_traverse_node = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/traverse-node.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_events();
    init_traverse_node();
    init_ui();
  }
});

// src/data.js
var LINTTYPES, CRITERIA, IGNORE;
var init_data = __esm({
  "src/data.js"() {
    LINTTYPES = [
      //   "BOOLEAN_OPERATION",
      "COMPONENT",
      "COMPONENT_SET",
      "TEXT",
      "GROUP",
      "FRAME",
      "INSTANCE"
    ];
    CRITERIA = {
      Should_Avoid: ["BOOLEAN_OPERATION", "GROUP"],
      Must_Be_Named: ["COMPONENT", "COMPONENT_SET", "FRAME", "INSTANCE"],
      Must_Use_Autolayout: ["COMPONENT", "FRAME", "INSTANCE"],
      Must_Use_Variable: ["COMPONENT", "FRAME", "INSTANCE"]
    };
    IGNORE = {
      Layer: [
        "Scroll Bar / Vertical",
        "Scroll Bar / Horizontal",
        "\u{1F39A} Width Control",
        "Vector",
        "Avatar"
      ],
      Property: {
        fillType: [
          "GRADIENT_LINEAR",
          "GRADIENT_RADIAL",
          "GRADIENT_ANGULAR",
          "GRADIENT_DIAMOND",
          "Image"
        ]
      }
    };
  }
});

// src/main.js
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
async function main_default() {
  on("START", handleStart);
  on("SELECT_TARGET", handleSelectTarget);
  on("SAVE", handleSave);
  if (await figma.clientStorage.getAsync("options") === void 0) {
    await figma.clientStorage.setAsync("options", initialOptions);
  }
  const options = await figma.clientStorage.getAsync("options");
  const data = {
    result: {},
    options
  };
  showUI(
    {
      height: 480,
      width: 360
    },
    data
  );
}
var initialOptions, handleSave, handleStart, lint, handleSelectTarget;
var init_main = __esm({
  "src/main.js"() {
    init_lib();
    init_data();
    initialOptions = {
      avoid: true,
      named_frames: true,
      auto_layout: true,
      padding: true,
      gap: true,
      fill: true,
      stroke: true,
      corner_radius: true
    };
    handleSave = async (criteria) => {
      await figma.clientStorage.setAsync("options", criteria);
    };
    handleStart = async () => {
      let result = {
        Should_Avoid: [],
        Must_Be_Named: [],
        Must_Use_Autolayout: [],
        Must_Use_Spacing_Tokens: [],
        Must_Use_Fill_Variable: [],
        Must_Use_Stroke_Variable: [],
        Must_Use_Radius_Variable: []
      };
      const options = await figma.clientStorage.getAsync("options");
      const selectionArr = figma.currentPage.selection;
      if (selectionArr) {
        const notIgnoreComponents = (node) => {
          let shouldNotIgnore = true;
          IGNORE.Layer.forEach((name) => {
            shouldNotIgnore = shouldNotIgnore && !node.name.includes(name);
          });
          return shouldNotIgnore;
        };
        selectionArr.map((selection) => {
          traverseNode(selection, (node) => {
            if (LINTTYPES.includes(node.type) && notIgnoreComponents(node)) {
              lint(node, result, options);
            }
          });
        });
      }
      const data = {
        result,
        options
      };
      showUI(
        {
          height: 480,
          width: 360
        },
        data
      );
    };
    lint = (node, result, options) => {
      if (CRITERIA["Should_Avoid"].includes(node.type) && options.avoid) {
        result["Should_Avoid"].push({
          type: "Should Avoid",
          node: { id: node.id, name: node.name, type: node.type },
          message: `Try not to use ${node.type}, use frame with autolayout instead`
        });
        return;
      }
      if (CRITERIA["Must_Be_Named"].includes(node.type) && options.named_frames) {
        if (node.name.includes("Frame")) {
          result["Must_Be_Named"].push({
            type: "Should Be Named",
            node: { id: node.id, name: node.name, type: node.type },
            message: `Missing frame name`
          });
        }
      }
      if (CRITERIA["Must_Use_Autolayout"].includes(node.type)) {
        if (node.layoutMode === "NONE" && node.children.length > 0 && node.children[0].type !== "VECTOR" && options.auto_layout) {
          result["Must_Use_Autolayout"].push({
            type: "Must Use Autolayout",
            node: { id: node.id, name: node.name, type: node.type },
            message: `Should use autolayout`
          });
        } else {
          if (node["itemSpacing"] !== 0 && node["primaryAxisAlignItems"] !== "SPACE_BETWEEN") {
            if (node.boundVariables["itemSpacing"] === void 0 && options.gap) {
              result["Must_Use_Spacing_Tokens"].push({
                type: "Must Use Spacing Tokens",
                node: { id: node.id, name: node.name, type: node.type },
                message: `itemSpacing variable is not assigned`
              });
            }
          }
          ;
          ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"].map(
            (position) => {
              if (node[position] !== 0) {
                if (node.boundVariables[position] === void 0 && options.padding) {
                  result["Must_Use_Spacing_Tokens"].push({
                    type: "Must Use Spacing Tokens",
                    node: { id: node.id, name: node.name, type: node.type },
                    message: `${position} variable is not assigned`
                  });
                }
              }
            }
          );
        }
      }
      if (CRITERIA["Must_Use_Variable"].includes(node.type)) {
        const isSolidFill = (node2) => {
          let bool = true;
          node2.fills.forEach((fill) => {
            bool = bool && fill.type === "SOLID";
          });
          return bool;
        };
        if (node.fills.length > 0 && (node.boundVariables.fills === void 0 || node.boundVariables.fills.length < node.fills.length) && isSolidFill(node) && options.fill) {
          result["Must_Use_Fill_Variable"].push({
            type: "Must Use Fill Variable",
            node: { id: node.id, name: node.name, type: node.type },
            message: `Fill variable is not assigned`
          });
        }
        if (node.strokes.length > 0 && (node.boundVariables.strokes === void 0 || node.boundVariables.strokes.length < node.strokes.length) && options.stroke) {
          result["Must_Use_Stroke_Variable"].push({
            type: "Must Use Stroke Variable",
            node: { id: node.id, name: node.name, type: node.type },
            message: `Stroke variable is not assigned`
          });
        }
        ;
        [
          "bottomLeftRadius",
          "bottomRightRadius",
          "topLeftRadius",
          "topRightRadius"
        ].map((position) => {
          if (node[position] !== 0 && node.boundVariables[position] === void 0 && options.corner_radius) {
            result["Must_Use_Radius_Variable"].push({
              type: "Must Use Variable Tokens",
              node: { id: node.id, name: node.name, type: node.type },
              message: `${position} variable is not assigned`
            });
          }
        });
      }
    };
    handleSelectTarget = (id) => {
      const node = figma.getNodeById(id);
      figma.currentPage.selection = [node];
    };
  }
});

// <stdin>
var modules = { "src/main.js--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.js--default" : figma.command;
modules[commandId]();
