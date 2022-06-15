import './PlantList.css';
import PlantListItem from '../PlantListItem/PlantListItem';

export default function PlantList({ plantItems, handleAddToOrder }) {
  const items = plantItems.map(item =>
    <PlantListItem
      key={item._id}
      plantItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="PlantList">
      {items}
    </main>
  );
}