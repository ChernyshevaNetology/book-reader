export type TIconStyle = {
  [key: string]: string | boolean;
};

export type TAttribute = {
  id: string;
  iconKey: string;
  iconStyle?: string;
  classPrefix: string;
  iconSet: string;
  title?: string;
  iconStyles: TIconStyle[];
  activeStyle: string;
  iconText?: string;
  baseClass: string;
};

export const attributes: TAttribute[] = [
  {
    id: "1",
    iconKey: "size",
    classPrefix: "font-size_",
    iconSet: "book__control_font-size",
    iconStyles: [
      {
        size: "small",
        isSelected: false,
      },
      {
        size: "default",
        isSelected: true,
      },
      {
        size: "big",
        isSelected: false,
      },
    ],
    activeStyle: "font-size_active",
    iconText: "A",
    baseClass: "font-size",
  },
  {
    id: "2",
    iconKey: "text_color",
    iconStyle: "text_color_",
    classPrefix: "text-color_",
    iconSet: "book__control_color",
    title: "Текст",
    iconStyles: [
      { text_color: "black", isSelected: true },
      { text_color: "gray", isSelected: false },
      { text_color: "whitesmoke", isSelected: false },
    ],
    activeStyle: "color_active",
    baseClass: "color",
  },
  {
    id: "3",
    iconKey: "bg_color",
    classPrefix: "bg_color_",
    iconSet: "book__control_background",
    title: "Фон",
    iconStyles: [
      {
        bg_color: "black",
        isSelected: false,
      },
      {
        bg_color: "gray",
        isSelected: false,
      },
      {
        bg_color: "white",
        isSelected: false,
      },
    ],
    activeStyle: "color_active",
    baseClass: "color",
  },
  {
    id: "4",
    classPrefix: "font-weight_",
    iconKey: "font-weight",
    iconSet: "book__control_boldness",
    title: "font weight",
    iconStyles: [
      {
        ["font-weight"]: "light",
        isSelected: false,
      },
      {
        ["font-weight"]: "bold",
        isSelected: false,
      },
      {
        ["font-weight"]: "normal",
        isSelected: false,
      },
    ],
    activeStyle: "font-weight_active",
    iconText: "A",
    baseClass: "text-size",
  },
  {
    id: "5",
    iconKey: "font-style",
    classPrefix: "font-style_",
    iconSet: "book__control_font",
    title: "font style",
    iconStyles: [
      {
        ["font-style"]: "normal",
        isSelected: false,
      },
      {
        ["font-style"]: "italic",
        isSelected: false,
      },
      {
        ["font-style"]: "underline",
        isSelected: false,
      },
      {
        ["font-style"]: "capital",
        isSelected: false,
      },
    ],
    activeStyle: "font-style_active",
    iconText: "A",
    baseClass: "text-size",
  },
];
