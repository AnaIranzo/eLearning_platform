import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsCourse = () => {
  const { course_id } = useParams();

  const [course, setCourse] = useState({});
  
  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${course_id}`)
      .then(response => setCourse(response.data))
      .catch(error => console.error(error));
  }, [course_id]);

  return (
    <section style={{ backgroundColor: "blue"}}>
      <h1> Detalles </h1>
      <article className="course-card">
        <h1>{course.course_title}</h1>
        <p>Description: {course.course_description}</p>
        <p>Formato: {course.format}</p>
        <p>Tamaño: {course.length}</p>
        <button>Ver pdf</button>
      </article>
    </section>
  );
};

export default DetailsCourse;


