import { createContext } from "react";
import { TAttribute } from "../icons-data/icons-data";

type TClassesContext = {
  bookClass: string[];
  activeAttributes: TAttribute[];
  handler: (
    attributes: TAttribute[],
    classes: string[],
    key: string,
    iconKey: string,
  ) => void;
};

export const ClassesContext = createContext<TClassesContext>({
  bookClass: [],
  activeAttributes: [],
  handler: (
    attributes: TAttribute[],
    classes: string[],
    key: string,
    iconKey: string,
  ) => [key, iconKey, attributes, classes],
});
