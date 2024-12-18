import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
            <h1 className="text-xl font-bold">My React App</h1>
            <nav>
                <a href="/" className="text-blue-400 hover:underline ml-4">Home</a>
                <a href="/about" className="text-blue-400 hover:underline ml-4">About</a>
            </nav>
        </header>
    );
};

export default Header;
