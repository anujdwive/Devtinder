import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>hello</div>} />
          <Route path='/login' element={<div>login</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
