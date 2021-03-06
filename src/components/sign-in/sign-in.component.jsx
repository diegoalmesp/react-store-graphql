import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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

  function handleFieldChange(e) {
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

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
