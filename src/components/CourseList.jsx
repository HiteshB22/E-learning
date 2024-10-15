import { Link } from 'react-router-dom';
import Card from './Card';
import js from '../images/javascript.png';
import reactjs from '../images/reactjs.jpg'
import dsa from '../images/dsa.png'
const CourseList = () => {
  const courses = [
    { id: 1, title: 'JavaScript Basics',img:js,link:"" },
    { id: 2, title: 'React for Beginners',img:reactjs ,link: "" },
    { id: 3, title: 'Data Structures & Algorithms',img:dsa ,link:"" }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      <div className='top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      <ul className="flex gap-10">
        {courses.map(course => (
          <li key={course.id} className="p-4 bg-orange-500 rounded-lg shadow-md">
            <Card courses={course}/>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CourseList;
