import './PlantList.css';
import PlantListItem from '../PlantListItem/PlantListItem';

export default function PlantList({ orders, activeOrder, handleSelectOrder  }) {
  const orderItems = orders.map(o =>
        <PlantListItem
        order={o}
        isSelected={o === activeOrder} 
        handleSelectOrder={handleSelectOrder}
        key={o._id}
        />
    );

    return (
        <main className="PlantList">
        {orderItems.length ?
            orderItems
            :
            <span className="no-plants">No Plants</span>
        }
        </main>
    );
}