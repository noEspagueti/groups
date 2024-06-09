import { Groups } from "./Groups";
import { useEffect, useState } from "react";
export const GroupContainer = () => {

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        if (courses.length === 0) {
            try {
                const response = fetch('http://143.110.156.21:3000/courses');
                if (!response.ok) {
                    throw new Error('sin conexion');
                }
                const data = response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

    }, []);

    console.log(courses);

    return (
        <div className="">
            {
                courses &&
                <Groups
                    key={courses[0].section_code}
                    section_code={courses[0].section_code}
                    number_groups={courses[0].number_groups}
                />}
        </div>
    );
};