import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders app that matches snapshot', () => {
    const tree = renderer
      .create(
        <App />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
