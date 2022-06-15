import PlantListItem from '../PlantListItem/PlantListItem';
import './PlantList.css';

export default function PlantList({ plants, activePlants, handleSelectPlant }) {
    const plantItems = plants.map(o =>
        <PlantListItem
        plant={p}
        isSelected={p === activePlant} 
        handleSelectPlant={handleSelectPlant}
        key={p._id}
        />
    );

    return (
        <main className="PlantList">
        {plantItems.length ?
            plantItems
            :
            <span className="no-plants">No Plants</span>
        }
        </main>
    );
}