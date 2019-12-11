import React, { useState } from 'react';

import './sign-in.styles.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function SignIn() {
  const [fields, setFields] = useState(INITIAL_STATE);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFieldChange({ target: { name, value } }) {
    setFields({ [name]: value });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={fields.email}
          required
          onChange={handleFieldChange}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={fields.password}
          required
          onChange={handleFieldChange}
        />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
