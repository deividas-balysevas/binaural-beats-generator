import React from 'react';
import { createRoot } from 'react-dom/client';
import BinauralBeatsGenerator from './BinauralBeatsGenerator';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BinauralBeatsGenerator />);