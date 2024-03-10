/**
 * @typedef ItemProps
 * @prop {string} type
 * @prop {string} date
 * @prop {string} title
 * @prop {string} description
 */

/**
 * @param {ItemProps} param0
 */
function Item({ type, date, title, description }) {
  return (
    <div className="flex items-center pb-20 gap-40 relative right-80">
      <div className="text-brand-2 text-right flex-basis-40 flex-shrink-0">
        <h3 className="text-xl font-montserrat">{type}</h3>
        <p>{date}</p>
      </div>
      <div className="flex-shrink-0">
        <h2 className="text-3xl pb-1 font-montserrat font-bold">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  )
}

export default Item
