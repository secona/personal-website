import React from "react";

export type TextProps<T extends React.ElementType<any>> =
  {} & React.ComponentPropsWithoutRef<T>;

export const Text = (props: TextProps<"p">) => {
  return <p {...props}></p>;
};

Text.H1 = (props: TextProps<"h1">) => {
  return <h1 {...props}></h1>;
};

Text.H2 = (props: TextProps<"h2">) => {
  return <h2 {...props}></h2>;
};

Text.H3 = (props: TextProps<"h3">) => {
  return <h3 {...props}></h3>;
};

Text.H4 = (props: TextProps<"h4">) => {
  return <h4 {...props}></h4>;
};

Text.H5 = (props: TextProps<"h5">) => {
  return <h5 {...props}></h5>;
};

Text.H6 = (props: TextProps<"h6">) => {
  return <h6 {...props}></h6>;
};
