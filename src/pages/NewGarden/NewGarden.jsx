import {useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './NewGarden.css';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import PlantList from '../../components/PlantList/PlantList';
import CategoryList from '../../components/CategoryList/CategoryList';
import GardenDetail from '../../components/GardenDetail/GardenDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import * as ordersAPI from '../../utilities/orders-api';

export default function NewGarden({ user, setUser }) {

    const [plantItems, setPlantItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
    const history = useHistory();


    useEffect(function() {
        async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = items.reduce((cats, item) => {
            const cat = item.category.name;
            return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setPlantItems(items);
        setActiveCat(items[0].category.name);
        }
        getItems();

        async function getCart(){
        const cart = await ordersAPI.getCart();
        console.log('cart get is ', cart)
        setCart(cart);
        }
        getCart();
    }, []);  // an empty dependency array will run the effect after the first render only


        //Event HANDLERS
        async function handleAddToOrder(itemId) {
            const cart = await ordersAPI.addItemToCart(itemId);
            setCart(cart);
        }

        async function handleChangeQty(itemId, newQty) {
            const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
            setCart(cart);
        }

        async function handleCheckout() {
            await ordersAPI.checkout();
            history.push('./gardens');
        }

    return(
        <>
            <h1>New Garden Page</h1>
            <main className="NewGarden">
            <aside>
                <Logo />
                <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
                />
                <Link to="/gardens" className="button btn-sm">PREVIOUS Gardens</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <PlantList
                plantItems={plantItems.filter(item => item.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
            />
            <GardenDetail />
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            </main>
        </>

    );

}