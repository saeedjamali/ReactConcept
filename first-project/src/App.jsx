import { version } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import CourseList from "./components/CourseList";



function App() {
    return (
        <div className="container mx-auto">
            <Header />
            <Nav />
            <CourseList />
        </div>
    );

}


export default App;
