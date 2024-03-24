import React, { useReducer } from 'react';
import { useAudio } from '../hooks/useAudio';
import AppContext from './app-context';

import music from '../assets/music/feature-track.mp3';

const state = {
  isLoadingComplete: false,
  isPageReady: false,
  audioPlaying: false,
  pageStatus: null,
  setPageStatus: () => {},
  audioToggle: () => {},
  setIsLoadingComplete: () => {},
  setIsPageReady: () => {},
};

const appReducer = (state, action) => {
  if (action.type === 'SETAUDIOPLAYING') {
    return Object.assign({}, state, {
      audioPlaying: action.playing,
    });
  }

  if (action.type === 'SETISLOADINGCOMPLETE') {
    return Object.assign({}, state, {
      isLoadingComplete: action.state,
    });
  }

  if (action.type === 'SETISPAGEREADY') {
    return Object.assign({}, state, {
      isPageReady: action.state,
    });
  }

  if (action.type === 'SETPAGESTATUS') {
    return Object.assign({}, state, {
      pageStatus: action.state,
    });
  }

  return state;
};

const AppProvider = ({ children }) => {
  const [appState, dispatchAppAction] = useReducer(appReducer, state);

  const setAudioPlaying = (playing) =>
    dispatchAppAction({ type: 'SETAUDIOPLAYING', playing });

  const setIsLoadingComplete = (state) =>
    dispatchAppAction({ type: 'SETISLOADINGCOMPLETE', state });

  const setIsPageReady = (state) =>
    dispatchAppAction({ type: 'SETISPAGEREADY', state });

  const setPageStatus = (state) =>
    dispatchAppAction({ type: 'SETPAGESTATUS', state });

  const [playing, toggle] = useAudio(music);

  const currentState = {
    isLoadingComplete: appState.isLoadingComplete,
    isPageReady: appState.isPageReady,
    audioPlaying: playing,
    audioToggle: toggle,
    pageStatus: appState.pageStatus,
    setAudioPlaying,
    setIsLoadingComplete,
    setIsPageReady,
    setPageStatus,
  };

  return (
    <AppContext.Provider value={currentState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
