function BicolorCircle({ from, to, ...props }) {
  return (
    <div
      className={`
      h-6 w-6 rounded-full cursor-pointer mb-1
      bg-gradient-to-r from-${from} from-50% to-${to} to-50%
    `}
      {...props}
    />
  )
}

export default BicolorCircle
