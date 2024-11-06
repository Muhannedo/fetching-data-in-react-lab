import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <div className="starship-list">
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipList;
