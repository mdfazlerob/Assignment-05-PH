import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function Technologies({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section className="technology-section" id="technologies">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <h2>
            Explore the <span className="gradient-text">Technologies</span>
          </h2>

          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        {/* Technology Layout */}
        <div className="technology-layout">
          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
