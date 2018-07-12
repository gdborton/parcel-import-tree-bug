import('./a');
import('./b');

// This also causes a failure. Are import() allowed to be first?
// import('./c');
// import './1';
export default {
  asdf: 1,
};
