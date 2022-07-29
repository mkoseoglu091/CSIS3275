import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ContactAdminPage from './pages/contactAdmin';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import RegisterPage from './pages/register';
import SettingPage from './pages/setting';
import TaskListPage from './pages/taskList';
import TaskDetailPage from './pages/taskListDetail';
import WardrobePage from './pages/wardrobe';

//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
    <Provider store={store}>
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
                    <Route path='/game'>
                        <Redirect push to={"questions.html"} />
                    </Route>
                </Switch>
            </BrowserRouter>
    </React.StrictMode>
    </Provider>
    );
};

export default App;
