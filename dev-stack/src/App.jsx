import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch technology data from JSON
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies!");
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const addToStack = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const removeFromStack = (id) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.info("All technologies removed!");
  };

  // Loading state
  if (loading) {
    return <div className="loading">Loading technologies...</div>;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Technologies
        technologies={technologies}
        stack={stack}
        onAdd={addToStack}
        onRemove={removeFromStack}
        onRemoveAll={removeAll}
      />
      <Footer />
    </>
  );
}

export default App;
