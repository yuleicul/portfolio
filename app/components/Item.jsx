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
    <div className="flex items-center justify-center pb-20 gap-40">
      <div className="text-brand-2 flex-1 text-right">
        <h3 className="text-lg font-montserrat">{type}</h3>
        <p>{date}</p>
      </div>
      <div className="text-brand-1 flex-1">
        <h2 className="text-2xl pb-1 font-montserrat font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Item;
