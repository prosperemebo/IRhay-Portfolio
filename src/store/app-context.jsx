import { createContext } from 'react';

const AppContext = createContext({
  isLoadingComplete: false,
  audioPlaying: false,
  audioToggle: () => {},
  setIsLoadingComplete: () => {},
});

export default AppContext;
