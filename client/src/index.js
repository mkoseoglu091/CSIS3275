import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ContactAdminPage from './pages/contactAdmin';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import RegisterPage from './pages/register';
import SettingPage from './pages/setting';
import TaskListPage from './pages/taskList';
import TaskDetailPage from './pages/taskListDetail';
import WardrobePage from './pages/wardrobe';
// import GameOne from './pages/Games/game1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoginPage />
                </Route>
                <Route path='/contactAdmin'>
                    <ContactAdminPage />
                </Route>
                <Route path='/main'>
                    <MainPage />
                </Route>
                <Route path='/register'>
                    <RegisterPage />
                </Route>
                <Route path='/setting'>
                    <SettingPage />
                </Route>
                <Route path='/taskList'>
                    <TaskListPage />
                </Route>
                <Route path='/taskListDetail'>
                    <TaskDetailPage />
                </Route>
                <Route path='/wardrobe'>
                    <WardrobePage />
                </Route>
                {/* <Route path='/game/gameOne'>
                    <GameOne />
                </Route> */}
            </Switch>
        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
