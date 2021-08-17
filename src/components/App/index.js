// == Import npm
import React from 'react';
import NeonButtons from '../NeonButtons';
import LoadButtons from '../LoadButtons';
import RippleButtons from '../RippleButtons';
import SnakeButtons from '../SnakeButtons';
import GradientButtons from '../GradientButtons';
import PixelsButtons from '../PixelsButtons';
import CornerSnakeButtons from '../CornerSnakeButtons';
import LightNeonButtons from '../LightNeonButtons';
import PaintImgButtons from '../PaintImgButtons';
import CornerLineButtons from '../CornerLineButtons';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <>
    <NeonButtons />
    <LoadButtons />
    <RippleButtons />
    <CornerSnakeButtons />
    <SnakeButtons />
    <GradientButtons />
    <PixelsButtons />
    <LightNeonButtons />
    <PaintImgButtons />
    <CornerLineButtons />
  </>
);

// == Export
export default App;
