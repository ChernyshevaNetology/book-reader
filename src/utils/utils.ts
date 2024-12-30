import { TAttribute } from "../icons-data/icons-data";

const removePrevClass = (arr: string[], prefix: string) => {
  return arr.filter((font) => !font.startsWith(prefix));
};

export const handleRecalculateClasses = (
  attributes: TAttribute[],
  bookClasses: string[],
  key?: string,
  iconKey?: string,
) => {
  if (!key || !iconKey) {
    return {
      updatedAttributes: attributes,
      bookClasses,
    };
  }

  let calculatedBookClasses: string[] = [...bookClasses];

  const updatedAttributes = attributes.map((attribute) => {
    if (attribute.iconKey === key) {
      const updatedIconStyles = attribute.iconStyles.map((style) => {
        if (style.isSelected) {
          return {
            ...style,
            isSelected: false,
          };
        }

        if (style[key] === iconKey) {
          calculatedBookClasses = [
            ...removePrevClass(calculatedBookClasses, attribute.classPrefix),
            attribute.classPrefix + style[key],
          ];
          return {
            ...style,
            isSelected: true,
          };
        }

        return style;
      });
      return { ...attribute, iconStyles: updatedIconStyles };
    }

    return attribute;
  });

  return {
    updatedAttributes,
    bookClasses: calculatedBookClasses,
  };
};
