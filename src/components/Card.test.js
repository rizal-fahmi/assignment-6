import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1,
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);

  // Check image
  const cardImage = screen.getByTestId('img-recipe-1');
  expect(cardImage).toBeInTheDocument();
  expect(cardImage).toHaveAttribute('src', 'https://via.placeholder.com/150');
  expect(cardImage).toHaveAttribute('alt', 'Test Recipe');

  // Check title
  const title = screen.getByTestId('title-recipe-1');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Test Recipe');

  // Check rating
  const rating = screen.getByTestId('rating-recipe-1');
  expect(rating).toBeInTheDocument();
  expect(rating).toHaveTextContent('4.5');

  // Check link
  const link = screen.getByTestId('link-recipe-1');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://dummyjson.com/recipes/1');
  expect(link).toHaveTextContent('READ MORE');
});
