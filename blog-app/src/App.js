import "./App.css";
import BlogPage from "./components/BlogPage";
import UserInfoContext from "./context/UserInfoContext";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  // const userInfo = { username: "Admin", isAdmin: true };

  return (
    // <UserInfoContext.Provider value={userInfo}>
    //   <BlogPage></BlogPage>
    // </UserInfoContext.Provider>
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>
  );
}

export default App;
