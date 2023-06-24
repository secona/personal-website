import React from "react";
import { cnProps } from "@/utils/classnames";
import styles from "./Card.module.scss";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return <div {...cnProps(props, styles.card)} ref={ref}></div>;
  }
);
