
export const createCleanForm = (setters:voidFunctionWithParameter<string>[]) :voidFunction => {
  return () => {
    setters.map(value => value(""))
  }
}