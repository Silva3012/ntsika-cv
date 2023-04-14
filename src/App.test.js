import React from 'react';
import { render } from '@testing-library/react';
import CV from './CV';

//Snapshot
// describe('CV component', () => {
//   it('should render correctly', () => {
//     const { asFragment } = render(<CV />);
//     expect(asFragment()).toMatchSnapshot();
//   });
// });

describe('CV component', () => {
  test('renders CV content', async () => {
    const { getByText } = render(<CV />);
    expect(getByText('NTSIKA SILVANO')).toBeInTheDocument();
    expect(getByText('SUMMARY')).toBeInTheDocument();
    expect(getByText('EXPERIENCE')).toBeInTheDocument();
    expect(getByText('PROJECTS')).toBeInTheDocument();
    expect(getByText('EDUCATION')).toBeInTheDocument();
    expect(getByText('SKILLS')).toBeInTheDocument();
  });
});
