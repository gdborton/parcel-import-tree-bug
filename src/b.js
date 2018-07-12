// if a.js imports './c', then import './c' and import('./c') will cause the
// build to be incorrect.
// import './c';
import('./c');

// directly async importing ./1 seems to work.
// import('./1');
