const apiEndPoints = {
  lineSize: {
    api: "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/processPipingLineSize?buCode=dpflow",
    target: {
      targetUiElementName: "line_size",
      targetProperty: "options",
      componentName: "DynamicForm",
      screenId: 1,
      uiElementType: "SINGLE_SELECT"
    }
  },
  fluidsdatabase: {
    api: "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/fluidsDatabase?buCode=dpflow&fluidType=LIQUID",
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
