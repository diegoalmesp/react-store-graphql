import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function SignIn() {
  const [fields, setFields] = useState(INITIAL_STATE);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFieldChange(e) {
    console.log(e.isTrusted);
    if (!e.isTrusted) return;

    const { name, value } = e.target;

    setFields({ ...fields, [name]: value });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={fields.email}
          handleChange={handleFieldChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={fields.password}
          handleChange={handleFieldChange}
          label="Password"
          required
        />

        <CustomButton type="submit" value="Submit Form">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
