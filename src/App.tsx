import { BookContent } from "components/book-content";
import { Header } from "components/header";
import "./App.css";
import { ClassContextProvider } from "context";

export const App = () => {
  return (
    <ClassContextProvider>
      <Header />
      <BookContent />
    </ClassContextProvider>
  );
};

export default App;
