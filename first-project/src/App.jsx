import { useState, version } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import CourseList from "./components/CourseList";
import TabData from './components/TabData'



function App() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="container mx-auto">
            <Header />
            <Nav />
            <CourseList />

            <button onClick={() => setIsShow((isShow) => !isShow)} className="px-4 py-1 ring-1 ring-slate-700 my-4 rounded-md ">Show Tab</button>
            {isShow ? <TabData /> : <p>Closed</p>}
        </div>
    );

}


export default App;
