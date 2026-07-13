import "./CategoryCard.css";

function CategoryCard({ icon, title }) {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>

      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
