import { createContext } from 'react';

const AppContext = createContext({
  isLoadingComplete: false,
  isPageReady: false,
  audioPlaying: false,
  pageStatus: '',
  setPageStatus: () => {},
  audioToggle: () => {},
  setIsLoadingComplete: () => {},
  setIsPageReady: () => {},
});

export default AppContext;
