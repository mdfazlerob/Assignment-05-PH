function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack">
      {/* Stack Header */}
      <div className="stack-header">
        <h3>Your Stack</h3>

        <p className="stack-count">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="stack-list">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt={technology.name} />

                <div className="stack-item-info">
                  <h4>{technology.name}</h4>
                  <p>{technology.category}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemove(technology.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button className="remove-all" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;


