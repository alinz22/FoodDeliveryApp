export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p id="meal-item-price">{meal.price}</p>
          <p id="meal-item-description">{meal.description}</p>
        </div>
        <p id="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
