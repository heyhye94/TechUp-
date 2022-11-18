// 모든 페이지에 공통적으로, 똑같은 위치에 들어가는 것만 넣기 (로고, 로그인/아웃)
import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import QuestionPage1 from "./components/views/QuestionPage/QuestionPage1";
import QuestionPage2 from './components/views/QuestionPage/QuestionPage2';
import QuestionPage3 from './components/views/QuestionPage/QuestionPage3';
import QuestionPage4 from './components/views/QuestionPage/QuestionPage4';
import QuestionPage5 from './components/views/QuestionPage/QuestionPage5';
import QuestionPage6 from './components/views/QuestionPage/QuestionPage6';
import ResultPage1 from './components/views/ResultPage/ResultPage1';
import ResultPage2 from './components/views/ResultPage/ResultPage2';



function Header() {
  return <header className="logo">
    <a href="/" className="logo">TechUp</a>
  </header>
}

function Login(props) {
  return <login>
    <a href="/LoginPage" className="login">{props.title}</a>
  </login>
}

function Footer() {
  return <div className="footer">
    CONTACT US
  </div>
}


function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="login">
        <Login title="로그인"></Login>
      </div>


      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>

        <Routes>
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage1" element={<QuestionPage1 />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage2" element={<QuestionPage2 />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage3" element={<QuestionPage3 />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage4" element={<QuestionPage4 />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage5" element={<QuestionPage5 />} />
        </Routes>

        <Routes>
          <Route path="/QuestionPage6" element={<QuestionPage6 />} />
        </Routes>

        <Routes>
          <Route path="/ResultPage1" element={<ResultPage1 />} />
        </Routes>

        <Routes>
          <Route path="/ResultPage2" element={<ResultPage2 />} />
        </Routes>


      </Router>

      <div>
        <Footer></Footer>
      </div>



    </div>
  );
}


export default App;
