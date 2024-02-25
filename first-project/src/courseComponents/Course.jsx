function Course(props) {
    const { course } = props;
    return (
        <div className="course-item col-span-2 sm:col-span-1 max-h-36 bg-slate-200 p-2 rounded-md flex">

            <div className="course-item__img h-full w-1/3 bg-slate-700 rounded-md">
                <img className="h-full w-full rounded-md" src={`image/${course.imageUrl}`} alt="" srcset=""></img>
            </div>
            <div className="course-item__detail w-full h-full flex flex-col p-2 gap-y-4 justify-between items-center">
                <CourseCardBody title={course.title} description={course.description} rate={course.rate} />
                <CourseCardFooter course={course} />
            </div>
        </div>

    );
}

export default Course;


function CourseCardBody({ title, description, rate }) {
    return (
        <div className="course-item__body flex flex-row w-full h-1/2 justify-between items-center">
            <div className=" flex-1 flex flex-col items-start justify-start ">
                <h1 className="font-bold">{title}</h1>
                <p className="font-thin">{description}</p>
            </div>
            <div className="  items-start justify-start ">{rate}</div>
        </div>
    )

}

function CourseCardFooter(props) {
    const { course } = props;

    return (
        <div className="course-item__footer flex flex-row w-full h-1/2 justify-between items-center">
            <div className=" flex-1 flex flex-col items-start justify-between ">

                <div className="flex flex-row space-x-1">
                    {course.tags.map((tag) => <h1 className="badge--secondary">{tag}</h1>)}
                </div>

                <p className="text-[12px] ml-2">{course.start}</p>
            </div>
            <div className={course.status == 0 ? "badge--completed" : (course.status == 1 ? "badge--uncompleted" : "badge--modified")}>{course.status == 0 ? "Completed" : (course.status == 1 ? "UnCompleted" : "Modified")}</div>
        </div>
    )
}