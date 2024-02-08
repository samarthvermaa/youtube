import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { StoreProvider } from "./utils/store";

/**
 *
 * App
 *  Header
 *  Body
 *    SideMenu
 *      MenuItems
 *    MainContainer
 *      ButtonList
 *      VideosCardContainer
 *        VideoCard
 */

function App() {
  return (
    <StoreProvider>
      <Header />
      <Body />
    </StoreProvider>
  );
}

export default App;
