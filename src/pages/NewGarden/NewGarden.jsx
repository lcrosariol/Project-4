import {useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './NewGarden.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import PlantList from '../../components/PlantList/PlantList';
import CategoryList from '../../components/CategoryList/CategoryList';
import GardenDetail from '../../components/GardenDetail/GardenDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewGarden() {

    const [plantItems, setPlantItems] = useState([]);
    const categoriesRef = useRef
useEffect(function() {
    async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setPlantItems(items);
    }
    getItems();
    }, []);

    return(
        <>
            <h1>New Garden Page</h1>
            <button onClick={() => setPlantItems(Date.now())}>Trigger re-render</button>
        </>

    );

}