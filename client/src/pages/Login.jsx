import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const Login = () => {
  return (
    <div>
      <Form noValidate>
        <h1>Login</h1>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
        />
        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
