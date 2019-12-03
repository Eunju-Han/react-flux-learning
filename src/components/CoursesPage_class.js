import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(_courses => this.setState({ courses: _courses }));

    // getCourses().then(function(_courses) {
    //   this.setState({ courses: _courses });
    // });
  }

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       courses: []
  //     };
  //   }

  //   renderRow(course) {
  //     return (
  //       <tr>
  //         <td>{course.title}</td>
  //         <td>{course.authorId}</td>
  //         <td>{course.category}</td>
  //       </tr>
  //     );
  //   }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Course</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
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
      </>
    );
  }
}

export default CoursesPage;
