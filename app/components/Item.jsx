/**
 * @typedef ItemProps
 * @prop {string} type
 * @prop {string} date
 * @prop {string} title
 * @prop {string} description
 * @prop {string} href
 */

/**
 * @param {ItemProps} param0
 */
function Item({ type, date, title, description, href }) {
  return (
    <div className="flex items-center justify-center pb-20 gap-40">
      <div className="text-brand-2 flex-1 text-right">
        <h3 className="text-lg font-montserrat">{type}</h3>
        <p>{date}</p>
      </div>
      <a className="text-brand-1 flex-1" href={href}>
        <h2 className="text-2xl pb-1 font-montserrat font-bold">{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Item;
