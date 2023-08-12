import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </>
  );
}

export default App;
