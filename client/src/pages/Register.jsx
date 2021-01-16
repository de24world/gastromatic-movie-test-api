import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Register = () => {
  const [values, setValues] = useState({
    usename: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate>
        <h1>Register</h1>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder="Email.."
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Input
          label="Confirm Password"
          placeholder="Confirm Password.."
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
        />
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          value={values.username}
          onChange={onChange}
        />
      </Form>
      <Button type="submit" primary>
        Register
      </Button>
    </div>
  );
};

export default Register;
