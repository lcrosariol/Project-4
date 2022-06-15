
import './PlantListItem.css';

export default function PlantListItem({ plant, isSelected, handleSelectPlant }) {
    return (
        <div className={`PlantListItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectPlant(plant)}>
        <div>
            <div>Plant Id: <span className="smaller">{plant.plantId}</span></div>
            <div className="smaller">{new Date(plant.updatedAt).toLocaleDateString()}</div>
        </div>
        <div className="align-rt">
            <div>${plant.plantTotal.toFixed(2)}</div>
            <div className="smaller">{plant.totalQty} Item{plant.totalQty > 1 ? 's' : ''}</div>
        </div>
        </div>
    );
}