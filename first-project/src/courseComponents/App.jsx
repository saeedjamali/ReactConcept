import { useState, version } from "react";
import Header from "./Header";
import Nav from "./Nav";
import CourseList from "./CourseList";
import TabData from './TabData'



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
