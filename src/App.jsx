import "./styles/global.css";

import Box from "./components/Box";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col gap-4 pb-8 w-full h-auto m-0 sm:m-10 sm:mx-auto sm:w-[500px] sm:gap-8">
      <Box />
      <Footer />
    </div>
  );
};

export default App;
