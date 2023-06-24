export const cn = (...classnames: any[]) => {
  return classnames.filter(Boolean).join(" ");
};

export const cnProps = (
  props: Record<string, any>,
  ...classnames: string[]
) => {
  return { ...props, className: cn(props.className, ...classnames) };
};
