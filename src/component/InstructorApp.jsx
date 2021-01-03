import React, { Component } from 'react';
import CoursesList from './CoursesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Course from './Course';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <main>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={CoursesList} />
                        <Route path="/courses" exact component={CoursesList} />
                        <Route path="/courses/:id" component={Course} />
                    </Switch>
                </main>
            </Router>
        )
    }
}
export default InstructorApp