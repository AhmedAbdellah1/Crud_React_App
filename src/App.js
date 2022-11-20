import React, { Component } from "react";
import AddCourse from "./componenets/AddCourse";
import CourseList from "./componenets/CourseList";


class App extends Component {
  /**
   * const [data ,setdata]=useState({courses:[],current:''});
   * 
   */

  state = {
    courses: [
      { name: "Html" },
      { name: "css" },
      { name: "javScript" },
      { name: "Reactjs" },
    ],
    current: '',

  };

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    });
  };

  addCourse = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    if (current === "") {
      return false
    } else {
      courses.push({ name: current });
      this.setState({
        // courses: courses,
        courses,
        current: ''
      });
    }
  };

  deleteCourse = (index) => {
    //all courses
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      //courses: courses
      courses
    });
  };

  editCourse = (index, value) => {
    //all courses
    let courses = this.state.courses;
    //course of gevin index
    let course = courses[index];
    //update name of course by new value
    course['name'] = value;
    // submit courses 
    this.setState({
      courses
    });
  }

  render() {
    //this to loop in courses 
    const myCourses = this.state.courses.length ?

      this.state.courses.map((course, index) => {
        return (
          <CourseList
            details={course}
            key={index}
            index={index}
            deleteCourse={this.deleteCourse}
            editCourse={this.editCourse}
          />
        );

      }) : <p>There is no item to show</p>;

    return (

      <section className="App" >

        <h2>Add Courses</h2>

        <AddCourse updateCourse={this.updateCourse} addCourse={this.addCourse} dataCurrent={this.state.current} />

        <ul>{myCourses}</ul>

      </section>

    );
  }
}

export default App;
