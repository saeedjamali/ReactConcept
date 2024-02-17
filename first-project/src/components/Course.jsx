function Course() {
    return (
        <div className="course-item col-span-2 sm:col-span-1 max-h-36 bg-slate-200 p-2 rounded-md flex">
            <div className="course-item__img h-full w-1/3 bg-slate-700 rounded-md">
                <img className="h-full w-full rounded-md" src="image/engLec.jpg" alt="" srcset=""></img>
            </div>
            <div className="course-item__detail w-full h-full flex flex-col p-2 gap-y-4 justify-between items-center">
                <div className="flex flex-row w-full h-1/2 justify-between items-center">
                    <div className=" flex-1 flex flex-col items-start justify-start ">
                        <h1 className="font-bold">English Lecture</h1>
                        <p className="font-thin">language listen with the most popular</p>
                    </div>
                    <div className="  items-start justify-start ">4.5</div>
                </div>
                <div className="course-item__footer flex flex-row w-full h-1/2 justify-between items-center">
                    <div className=" flex-1 flex flex-col items-start justify-between ">
                        <h1 className="badge--secondary">language</h1>
                        <p className="text-[12px] ml-2">Jul 2,2023</p>
                    </div>
                    <div className="text-[12px] bg-stone-400 p-1 rounded-md  items-start justify-start ">Completed</div>
                </div>
            </div>
        </div>

    );
}

export default Course;