import { useState } from "react";

const tabData = [
    { id: 1, title: "Item 1", description: "This is Item 1" },
    { id: 2, title: "Item 2", description: "This is Item 2" },
    { id: 3, title: "Item 3", description: "This is Item 3" },
    { id: 4, title: "Item 4", description: "This is Item 4" }
]






export default function TabData() {
    const [activeTab, setActiveTab] = useState(1);
    const [count, setCount] = useState(1);
    const handleActiveTab = (id) => {
        setCount(count + 1);
        setActiveTab(id)
    };
    return (
        <div className="mt-2 ring-2 ring-gray-400 min-h-36 rounded-md">
            <div className="flex justify-around items-center px-4 py-2 border-b-2">

                {

                    tabData.map((tb) =>
                        <div className={activeTab == tb.id ? "relative active" : ""}
                            onClick={() => handleActiveTab(tb.id)} >
                            <button key={tb.id} type="button" className="px-4 border-b-2">{tb.title}</button>
                            <span className="tab__indicator"></span>
                        </div>

                    )
                }

            </div>
            <div className="flex items-center justify-center min-h-24 ">
                <p>{tabData[activeTab - 1].description} ----  {count} </p>
            </div>
        </div>
    );
}

