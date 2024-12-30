import React, { useState } from "react";
import { handleRecalculateClasses } from "../utils/utils";
import { attributes, TAttribute } from "../icons-data/icons-data";
import { ClassesContext } from "./classes-context";

interface IClassesContext {
  children: React.ReactNode;
  key?: string;
  iconKey?: string;
}

export const ClassContextProvider: React.FC<IClassesContext> = ({
  children,
}) => {
  const [classes, setClasses] = useState<string[]>([]);
  const [activeAttributes, setActiveAttributes] =
    useState<TAttribute[]>(attributes);

  const handleTestCallback = (
    attributes: TAttribute[],
    classes: string[],
    key: string,
    iconKey: string,
  ) => {
    const { updatedAttributes, bookClasses } = handleRecalculateClasses(
      attributes,
      classes,
      key,
      iconKey,
    );

    setActiveAttributes(updatedAttributes);
    setClasses(bookClasses);
  };

  return (
    <ClassesContext.Provider
      value={{
        bookClass: classes,
        activeAttributes,
        handler: handleTestCallback,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};
