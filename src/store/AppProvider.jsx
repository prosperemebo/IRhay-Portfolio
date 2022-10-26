import React, { useReducer } from 'react';
import { useAudio } from '../hooks/useAudio';
import AppContext from './app-context';

import music from '../assets/music/eom.mp3';

const state = {
  isLoadingComplete: false,
  audioPlaying: false,
  audioToggle: () => {},
  setIsLoadingComplete: () => {},
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

  return state;
};

const AppProvider = ({ children }) => {
  const [appState, dispatchAppAction] = useReducer(appReducer, state);

  const setAudioPlaying = (playing) =>
    dispatchAppAction({ type: 'SETAUDIOPLAYING', playing });

  const setIsLoadingComplete = (state) =>
    dispatchAppAction({ type: 'SETISLOADINGCOMPLETE', state });

  const [playing, toggle] = useAudio(music);

  const currentState = {
    isLoadingComplete: appState.isLoadingComplete,
    audioPlaying: playing,
    audioToggle: toggle,
    setAudioPlaying,
    setIsLoadingComplete,
  };

  return (
    <AppContext.Provider value={currentState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
