import { useEffect, useState } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import getStarships from "./services/starshipService";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getStarships();
        setStarships(data);
        setFilteredStarships(data);
      } catch (error) {
        console.error("Error fetching starships", error);
      }
    };
    fetchStarships();
  }, []);
  const handleSearch = (searchTerm) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
};

export default App;
