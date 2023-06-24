export const cn = (...classnames: (string | undefined)[]) => {
  return classnames.filter(Boolean).join(" ");
};

export const cnProps = (
  props: Record<string, any>,
  ...classnames: string[]
) => {
  return { ...props, className: cn(props.className, ...classnames) };
};
