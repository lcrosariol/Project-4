import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dnd from '../../components/Dnd/Dnd';


export default function VirtualGarden() {


    
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="VirtualGarden">
                <Dnd />

            </div>

        </DndProvider>
    );
}



//https://www.youtube.com/watch?v=4bzJrEETW4w Drag and drop tutorial 