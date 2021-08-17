// == Import npm
import React from 'react';
import NeonButtons from '../NeonButtons';
import LoadButtons from '../LoadButtons';
import RippleButtons from '../RippleButtons';
import SnakeButtons from '../SnakeButtons';
import GradientButtons from '../GradientButtons';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <>
    <NeonButtons />
    <LoadButtons />
    <RippleButtons />
    <SnakeButtons />
    <GradientButtons />
  </>
);

// == Export
export default App;
