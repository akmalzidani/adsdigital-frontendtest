function Button({ children, isFit = false, variant, ...rest }) {
  const baseClass = isFit
    ? "px-6 py-[0.625rem] rounded-md"
    : "w-full py-3 rounded-md";
  const variantClass = {
    primary: "text-white bg-primary",
    warning: "text-white bg-warning",
    primaryOutline: "text-primary bg-transparent border border-primary",
  }[variant];

  return (
    <button {...rest} className={`${baseClass} ${variantClass}`}>
      {children}
    </button>
  );
}

export function ButtonPrimary(props) {
  return <Button {...props} variant="primary" />;
}

export function ButtonWarning(props) {
  return <Button {...props} variant="warning" />;
}

export function ButtonPrimaryOutline(props) {
  return <Button {...props} variant="primaryOutline" />;
}
