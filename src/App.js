import ControlPanel from "./components/ControlPanel";
import Form from "./components/Form";
import {useState} from "react";

function App() {
    const [controlsAdded, setControlsAdded] =useState([])
    console.log('controlsAdded', controlsAdded)
    return (
        <div className="flex flex-grow h-full  w-full h-screen bg-amber-400">
            <ControlPanel controlsAdded={controlsAdded} setControlsAdded={setControlsAdded} />
            <Form controlsAdded={controlsAdded} setControlsAdded={setControlsAdded} />
        </div>
    );
}

export default App;
