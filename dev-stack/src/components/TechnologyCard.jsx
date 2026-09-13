function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="tech-icon"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="tech-description">{technology.description}</p>

      <div className="card-info">
        <span className="category">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
        <span className="rating">⭐ {technology.rating}</span>
      </div>

      <button
        className="add-btn"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;


