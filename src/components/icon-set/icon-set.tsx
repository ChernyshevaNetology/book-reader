import { TAttribute } from "../../icons-data/icons-data.ts";
import cn from "classnames";
import { useClasses } from "../../context";

type TIconSetProps = {
  icon: TAttribute;
};

const IconSet = ({ icon }: TIconSetProps) => {
  const { handler, activeAttributes, bookClass } = useClasses();

  const {
    iconSet,
    title,
    iconStyles,
    iconKey,
    classPrefix,
    baseClass,
    activeStyle,
    iconText,
    iconStyle,
  } = icon;
  return (
    <div className={`book__control ${iconSet}`}>
      {icon?.title && <span className="color__title">{title}</span>}
      {iconStyles.map((link) => {
        return (
          <a
            onClick={() =>
              handler(
                activeAttributes,
                bookClass,
                iconKey,
                link[iconKey] as string,
              )
            }
            key={link[iconKey] as string}
            className={cn(
              `${baseClass} ${iconStyle || classPrefix || baseClass}${link[iconKey]}`,
              { [activeStyle]: link.isSelected },
            )}
          >
            {iconText}
          </a>
        );
      })}
    </div>
  );
};

export { IconSet };
