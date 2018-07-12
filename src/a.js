// if b.js tries to import ./c also, the build will be incorrect
import './c';

// directly async importing ./1 seems to work.
// import('./1');
