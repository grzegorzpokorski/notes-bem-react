import React, { useState, useEfect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import List from './components/List';

import './styles/modules/_footer.scss';

function App() {

    const [notes, setNotes] = useState([]);

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <List {...notes} />
            </main>
            <Footer content="Created by Grzegorz Pokorski." />
        </React.Fragment>
    );
}

export default App;
