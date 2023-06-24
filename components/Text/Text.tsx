import React from "react";
import { GlobalStyles } from "@/styles/global";
import { cnProps } from "@/utils/classnames";
import styles from "./Text.module.scss";

function handleProps({ fontSize, ...otherProps }: TextProps<any>) {
  return cnProps(otherProps, styles[`text-fs-${fontSize}`]);
}

export type TextProps<T extends React.ElementType<any>> = {
  fontSize?: keyof GlobalStyles["fontSize"];
} & React.ComponentPropsWithoutRef<T>;

export const Text = (props: TextProps<"p">) => <p {...handleProps(props)}></p>;
Text.H1 = (props: TextProps<"h1">) => <h1 {...handleProps(props)}></h1>;
Text.H2 = (props: TextProps<"h2">) => <h2 {...handleProps(props)}></h2>;
Text.H3 = (props: TextProps<"h3">) => <h3 {...handleProps(props)}></h3>;
Text.H4 = (props: TextProps<"h4">) => <h4 {...handleProps(props)}></h4>;
Text.H5 = (props: TextProps<"h5">) => <h5 {...handleProps(props)}></h5>;
Text.H6 = (props: TextProps<"h6">) => <h6 {...handleProps(props)}></h6>;
