import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

function AccordionItem({ accordion, onOpenAccordion }) {

    console.log(accordion.id);
    return (
        <div >
            <div className="header flex bg-slate-300 px-4 py-2 rounded-t-md mt-4 ">
                <h3 className="flex-1" onClick={() => onOpenAccordion(accordion.id)}>{accordion.title}</h3>
                <span className="transition-all delay-1000 ease-in-out" > {!accordion.status ? <FaChevronDown /> : <FaChevronUp />}</span>
            </div>
            {accordion.status ? <div className="content bg-white px-4 py-2 rounded-b-md">
                <p>{accordion.content}</p>
            </div> : ""}
        </div >
    )
}

export default AccordionItem