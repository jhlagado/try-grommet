import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { ScrollToTop } from '../utils';

const BaseSimpleForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeEmail = (event: any) => setEmail(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleLogin = async () => {
    const result = await fetch('http://localhost:2334/v1/demo/stuff', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    try {
      const data = await result.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="main">
      <ScrollToTop />
      <div className="header">
        <h1>Simple Form</h1>
        <h2>a not very complicated form</h2>
      </div>
      <div className="content">
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <legend>A stacked form</legend>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              value={email}
              onChange={handleChangeEmail}
            />
            <span className="pure-form-message">This is a required field</span>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter password"
              value={password}
              onChange={handleChangePassword}
            />
            <label htmlFor="az">Zone</label>
            <select id="az" name="az">
              <option value="ap-southeast-2a">SouthEast 2A</option>
              <option value="ap-southeast-2b">SouthEast 2B</option>
              <option value="ap-southeast-2c">SouthEast 2C</option>
            </select>
            <label className="pure-checkbox">
              <input id="remember" type="checkbox"></input> Remember me
            </label>
            <button
              type="button"
              className="pure-button pure-button-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export const SimpleForm = styled(BaseSimpleForm)``;
SimpleForm.displayName = 'SimpleForm';
