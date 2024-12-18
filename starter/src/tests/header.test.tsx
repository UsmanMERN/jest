import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
    it('renders the header with title', () => {
        render(<Header />);
        const title = screen.getByText('My React App');
        expect(title).toBeInTheDocument();
    });

    it('renders the navigation links', () => {
        render(<Header />);
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About');

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveAttribute('href', '/about');
    });

    it('applies correct styling to the navigation links', () => {
        render(<Header />);
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About');

        expect(homeLink.classList.contains('text-blue-400')).toBe(true);
        expect(homeLink.classList.contains('hover:underline')).toBe(true);
        expect(homeLink.classList.contains('ml-4')).toBe(true);

        expect(aboutLink.classList.contains('text-blue-400')).toBe(true);
        expect(aboutLink.classList.contains('hover:underline')).toBe(true);
        expect(aboutLink.classList.contains('ml-4')).toBe(true);
    });
});
