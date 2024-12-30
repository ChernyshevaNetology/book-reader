import { memo } from "react";
import { IconSet } from "../icon-set";
import { useClasses } from "context";

const Header = memo(() => {
  const { activeAttributes } = useClasses();

  return (
    <div className="book__controls">
      {activeAttributes.map((icon) => (
        <IconSet key={icon.id} icon={icon} />
      ))}
    </div>
  );
});

export { Header };
