import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Course</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
      {/* <tbody>{this.state.courses.map(this.renderRow)}</tbody> */}
    </table>
  );
}

//// eslint-disable-next-line react/no-typos
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
  //   courses: PropTypes.array.isRequired
};

// CourseList.defaultProps = {
//   coures: []
// };

export default CourseList;
