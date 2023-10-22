export const LINTTYPES = [
  //   "BOOLEAN_OPERATION",
  "COMPONENT",
  "COMPONENT_SET",
  "TEXT",
  "GROUP",
  "FRAME",
  "INSTANCE",
]
export const CRITERIA = {
  Should_Avoid: ["BOOLEAN_OPERATION", "GROUP"],
  Must_Be_Named: ["COMPONENT", "COMPONENT_SET", "FRAME", "INSTANCE"],
  Must_Use_Autolayout: ["COMPONENT", "FRAME", "INSTANCE"],
}
