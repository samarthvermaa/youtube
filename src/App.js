import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <StoreProvider>
      <Header />
      <RouterProvider router={appRouter} />
    </StoreProvider>
  );
}

export default App;
