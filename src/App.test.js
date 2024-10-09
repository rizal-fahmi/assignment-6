/* eslint-disable testing-library/prefer-find-by */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders App component with NavBar, image banner, and Footer', async () => {
  render(<App />);

  // Check image banner
  const banner = screen.getByTestId('image-banner');
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute(
    'src',
    'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg'
  );
  expect(banner).toHaveAttribute('alt', 'banner');

  // Check footer text
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent(
    '© 2024 Company, Inc. All rights reserved.'
  );

  // Check facebook link
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveProperty('href', 'https://facebook.com/');

  // Check x link
  const xLink = screen.getByTestId('link-x');
  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveProperty('href', 'https://x.com/');

  // Check instagram link
  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveProperty('href', 'https://instagram.com/');

  // Check title
  const navBarTitle = screen.getByTestId('my-recipe');
  expect(navBarTitle).toBeInTheDocument();
  expect(navBarTitle).toHaveTextContent('My Recipe');

  // Check input
  const searchInput = screen.getByPlaceholderText('Recipe Name');
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(searchInput.value).toBe('test');

  // Check form
  const searchForm = screen.getByTestId('form-search');
  expect(searchForm).toBeInTheDocument();
  expect(searchForm).toHaveTextContent('Search');
  fireEvent.submit(searchForm);
  expect(searchInput.value).toBe('');

  // Check search button
  fireEvent.change(searchInput, { target: { value: 'Chicken Biryani' } });
  fireEvent.submit(searchForm);
  const result = await waitFor(
    () => screen.getByText('Chicken Biryani'),
    { timeout: 3000 });
  expect(result).toBeInTheDocument();
});
