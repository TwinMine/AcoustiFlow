import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MusicPlayer from "./components/music-player/MusicPlayer";
import { useState } from "react";
import Data from "./components/music-player/data/Data";
import DisplayTable from "./components/music-player/MusicContext/DisplayTable";
import PlaylistContext from "./components/music-player/MusicContext/PlaylistContext";
import ShowInput from "./components/music-player/MusicContext/ShowInput";
import CurrentSongIndex from "./components/music-player/MusicContext/CurrentSongIndex";
import CurrentList from "./components/music-player/MusicContext/CurrentList";
import TakeMusic from "./components/music-player/MusicContext/TakeMusic";
import Tutorial from "./components/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MusicPlayer />,
  },
  {
    path: "/import-export",
    element: <Data />,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },

  {
    path: "*",
    element: <MusicPlayer />,
  },
]);

function App() {
  const [displayTable, setDisplayTable] = useState([]);
  const [playlistContext, setPlaylistContext] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentList, setCurrentList] = useState(0);
  const [takeMusic, setTakeMusic] = useState([]);
  return (
    <>
      <TakeMusic.Provider value={{ takeMusic, setTakeMusic }}>
        <CurrentList.Provider value={{ currentList, setCurrentList }}>
          <CurrentSongIndex.Provider
            value={{ currentSongIndex, setCurrentSongIndex }}
          >
            <ShowInput.Provider value={{ showInput, setShowInput }}>
              <PlaylistContext.Provider
                value={{ playlistContext, setPlaylistContext }}
              >
                <DisplayTable.Provider
                  value={{ displayTable, setDisplayTable }}
                >
                  <RouterProvider router={router} />
                </DisplayTable.Provider>
              </PlaylistContext.Provider>
            </ShowInput.Provider>
          </CurrentSongIndex.Provider>
        </CurrentList.Provider>
      </TakeMusic.Provider>
    </>
  );
}

export default App;
