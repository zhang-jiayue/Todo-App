import React, { Component } from 'react';
import moment from 'moment';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      description: 'Learn Forms',
      targetDate: moment(new Date()).format('YYYY-MM-DD'),
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  onSubmit(values) {
    console.log(values);
  }
  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = 'Enter a description';
    } else if (values.description.length < 5) {
      errors.description = 'Enter at least 5 characters in description';
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = 'Enter a valid target date';
    }
    return errors;
  }
  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveTodo(username, this.state.id).then((response) =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
      })
    );
  }
  render() {
    let { description, targetDate } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{
              description,
              targetDate,
            }}
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnBlur={false}
            validateOnChange={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="targetDate"
                  ></Field>
                </fieldset>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* Todo Component for id - {this.props.match.params.id} */}
      </div>
    );
  }
}
export default TodoComponent;
