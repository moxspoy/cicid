import 'react-native';
import React from 'react';
import App from '../App';

import {fireEvent, render, waitFor} from '@testing-library/react-native';

it('Increment counter', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<App />);

  const button = getByText('TAMBAH');
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId('counter')).toBeTruthy());

  expect(getByTestId('counter').props.children).toBe('1');
  expect(toJSON()).toMatchSnapshot();
});

it('Reset counter', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<App />);

  const button = getByText('RESET');
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId('counter')).toBeTruthy());

  expect(getByTestId('counter').props.children).toBe('0');
  expect(toJSON()).toMatchSnapshot();
});
