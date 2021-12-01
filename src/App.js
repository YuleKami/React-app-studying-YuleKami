import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' component={Profile}/>
                        <Route path='/dialogs/*' component={Dialogs}/>
                        <Route path='/news/*' component={News}/>
                        <Route path='/music/*' component={Music}/>
                        <Route path='/settings/*' component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;