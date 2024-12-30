import { useContext } from "react";
import { ClassesContext } from "./classes-context";

export const useClasses = () => {
  const classesContext = useContext(ClassesContext);

  if (!classesContext) {
    throw new Error("useClasses context must be used within useClasses");
  }

  return classesContext;
};
