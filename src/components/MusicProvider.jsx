import React, { createContext, useContext, useState } from "react";

// Create the context
const MusicContext = createContext();

// Create the provider
export const MusicProvider = ({ children }) => {
  const [currentMusicId, setCurrentMusicId] = useState(1);

  return (
    <MusicContext.Provider value={{ currentMusicId, setCurrentMusicId }}>
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook to use the MusicContext
export const useMusicContext = () => {
  return useContext(MusicContext);
};