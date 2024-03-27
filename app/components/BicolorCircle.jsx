function BicolorCircle({ from, to, className = "", ...props }) {
  return (
    <div
      className={`
      h-6 w-6 rounded-full cursor-pointer mb-1
      sm:bg-gradient-to-r bg-gradient-to-b from-${from} from-50% to-${to} to-50%
      ${className}
    `}
      {...props}
    />
  );
}

export default BicolorCircle;
