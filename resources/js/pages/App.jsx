import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav';
import ContactList from './ContactList';
import AddContact from './AddContact';

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<ContactList />} />
                <Route path='/add-contact' element={<AddContact />} />
            </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('app')).render(
    <App />
);