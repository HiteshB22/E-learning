import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { courseId } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Course Detail for Course ID: {courseId}</h2>
      <p className="text-lg">This is where the course content will be displayed.</p>
      {/* Add more details for the course here */}
    </div>
  );
};

export default CourseDetail;
