// import './MenuListItem.css';

export default function CategoryItem({ item }) {
    return (
        <div className="CategoryItem">
        <img className="photo flex-ctr-ctr" src={item.photo} />
        <div className="name">{item.name}</div>
        <div className="buy">
            <span>${item.price.toFixed(2)}</span>
            
        </div>
        </div>
    );
}