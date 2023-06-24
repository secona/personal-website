import React from "react";
import { GlobalStyles } from "@/styles/global";
import { cnProps } from "@/utils/classnames";
import styles from "./Text.module.scss";

export type TextProps<T extends React.ElementType<any>> = {
  fontSize?: keyof GlobalStyles["fontSize"];
} & React.ComponentPropsWithoutRef<T>;

export const Text = ({ fontSize, ...props }: TextProps<"p">) => {
  return (
    <p {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></p>
  );
};

Text.H1 = ({ fontSize, ...props }: TextProps<"h1">) => {
  return (
    <h1 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h1>
  );
};

Text.H2 = ({ fontSize, ...props }: TextProps<"h2">) => {
  return (
    <h2 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h2>
  );
};

Text.H3 = ({ fontSize, ...props }: TextProps<"h3">) => {
  return (
    <h3 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h3>
  );
};

Text.H4 = ({ fontSize, ...props }: TextProps<"h4">) => {
  return (
    <h4 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h4>
  );
};

Text.H5 = ({ fontSize, ...props }: TextProps<"h5">) => {
  return (
    <h5 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h5>
  );
};

Text.H6 = ({ fontSize, ...props }: TextProps<"h6">) => {
  return (
    <h6 {...cnProps(props, fontSize ? styles[`text-fs-${fontSize}`] : "")}></h6>
  );
};
