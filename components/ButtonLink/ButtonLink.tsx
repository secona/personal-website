import React from "react";
import Link, { LinkProps } from "next/link";
import styles from "./ButtonLink.module.scss";

export interface ButtonLinkProps extends LinkProps {
  bgColor?: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  children,
  bgColor = "black",
  ...props
}: ButtonLinkProps) => {
  return (
    <Link {...props}>
      <button className={styles.button} style={{ backgroundColor: bgColor }}>
        {children}
      </button>
    </Link>
  );
};
