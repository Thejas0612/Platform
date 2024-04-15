const apiEndPoints = {
  lineSize: {
    api: process.env.LINE_SIZE_API,
    target: {
      targetUiElementName: "line_size",
      targetProperty: "options",
      componentName: "DynamicForm",
      screenId: 1,
      uiElementType: "SINGLE_SELECT"
    }
  },
  fluidsdatabase: {
    api: process.env.FLUID_DATABASE_LIST,
    target: {
      targetUiElementName: "fluidsdatabase",
      targetProperty: "options",
      componentName: "DynamicForm",
      screenId: 1,
      uiElementType: "SINGLE_SELECT"
    }
  }
};

export default apiEndPoints;
