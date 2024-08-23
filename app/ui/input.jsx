export function Input({ type = "text", id, name, placeholder, ...rest }) {
  return (
    <input
      type={type}
      id={id || name}
      name={name}
      placeholder={placeholder}
      className="flex h-12 min-w-[314px] text-xs w-full rounded-md border border-input bg-background px-5 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
      required
      {...rest}
    />
  );
}
