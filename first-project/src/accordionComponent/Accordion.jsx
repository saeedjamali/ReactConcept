
import { useState } from "react";
import AccordionItem from "./AccordionItem";
const accordionList = [
    { id: 1, title: "item1", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....1", status: false },
    { id: 2, title: "item2", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....2", status: false },
    { id: 3, title: "item3", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....3", status: false },
    { id: 4, title: "item4", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....4", status: false },
    { id: 5, title: "item5", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....5", status: false },
    { id: 6, title: "item6", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....6", status: false },
    { id: 7, title: "item7", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ....7", status: false },
];


function Accordion() {
    const [accordions, setAccordionList] = useState(accordionList);

    const handleOpenAccordion = (id) => {
        console.log(id);
        setAccordionList(() => accordions.map((ac) => ac.id == id ?{...ac ,status : !ac.status} : {...ac,status:false}));
        console.log(accordions);

    }
    // setAccordionList(accordionList);
    // console.log(accordions)
    return (
        <div>
            <div className="container mx-auto p-4 bg-gray-200">
                <div className="accordion max-w-screen-md mx-auto ">
                    {accordions.map((ac) => <AccordionItem key={ac.id} accordion={ac} onOpenAccordion={handleOpenAccordion}/>)}
                </div>
            </div>

        </div>
    )
}

export default Accordion