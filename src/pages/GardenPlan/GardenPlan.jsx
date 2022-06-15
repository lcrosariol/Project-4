import {checkToken} from "../../utilities/users-service";
import CategoryItem from '../CategoryItem/CategoryItem';
import { useState, useEffect, useRef } from 'react';






export default function GardenPlan() {

    // async function handleCheckToken(){
    //     const expDate = await checkToken();
    //     console.log(expDate);
    // }
    const items = items.map(item =>
        <CategoryItem
            key={item._id}
            item={item}/>

        )
    return (
            <main className="MenuList">
            {items}
            </main>
    );
}


