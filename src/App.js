import React from "react";
import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import Header from "./components/Interface/Header";
import './App.css'

const App = () => {
   return (
    <>
   <Header />
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/categories" element={<CategoriesPage />}/>
  </Routes></>

   )

}

export default App;



























// import React from 'react'
// import {BrowserRouter as Routes, Route, } from 'react-router-dom';
// import Books from './components/Books';
// import Categories from './components/Categories';

// import './App.css';
// // import Header from './components/Interface/Header';

// class App extends React.Component {

//     render() {
//       return (
//       //   <Routes>
//       //   <div>
//       //     <Route path="/" component={Books} exact />
//       //     <Route path="/categories" component={Categories} />
//       //   </div>
//       //  </Routes>
//       );
//     }
//   }

// export default App;
