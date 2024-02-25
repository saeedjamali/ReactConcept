import Course from "./Course";

const courses = [
    {
        id: 1,
        title: "Design Strategy",
        description: "Lesson on planning",
        imageUrl: "img1.jpg",
        rate: "4.5",
        tags: ["language", "UI/UX"],
        start: "12.07.2023",
        status: 0
    },
    {
        id: 2,
        title: "Design Strategy",
        description: "Lesson on planning",
        imageUrl: "img2.jpg",
        rate: "4.5",
        tags: ["language", "UI/UX", "front", "backend"],
        start: "12.07.2023",
        status: 1
    },
    {
        id: 3,
        title: "Design Strategy",
        description: "Lesson on planning",
        imageUrl: "img3.jpg",
        rate: "4.5",
        tags: ["language"],
        start: "12.07.2023",
        status: 2
    },
    {
        id: 4,
        title: "Design Strategy",
        description: "Lesson on planning",
        imageUrl: "img1.jpg",
        rate: "4.5",
        tags: ["language", "UI/UX"],
        start: "12.07.2023",
        status: 1
    },
];

function CourseList() {
    return (
        <div className="course-list bg-slate-100 p-2">
            <div className=" grid grid-cols-2 gap-2 mt-2">
                {
                    courses.map((course) => {
                        return (
                            <Course key={course.id} course={course} />
                        )
                    })
                }


            </div>
        </div>
    );
}


export default CourseList;