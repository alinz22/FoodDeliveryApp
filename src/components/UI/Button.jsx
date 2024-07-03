export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? `button text-only` : `button`;
  cssClasses += " " + className;

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
