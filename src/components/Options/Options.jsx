import css from './Options.module.css'
export default function Options({ handleClick, reviews, total, handleReset }) {
    return   <div className={css.options}>
    {Object.keys(reviews).map((key) => (
      <button key={key} onClick={() => handleClick(key)}>
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </button>
    ))}
    {total !== 0 && <button onClick={handleReset}>Reset</button>}
  </div>
}