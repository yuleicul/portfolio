function Social() {
  return (
    <div className="flex flex-col items-center gap-6">
      <img
        alt="Yulei Chen"
        src="/avatar.png"
        className="h-40 w-40 hue-rotate-[var(--img-hue-rotate)]"
      />
      <div className="flex gap-3">
        <div className="i-mdi-github text-3xl" />
        <div className="i-mdi-youtube text-3xl" />
        <div className="i-mdi-rss text-3xl" />
      </div>
    </div>
  )
}

export default Social
