import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch } from 'react-router';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { initStore } from './store';

// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import SidebarCart from './components/SidebarCart/SidebarCart';
// import Footer from './components/Footer/Footer';

import { ModalStateProvider } from './hooks/useModalState';
import OrderCompleted from './components/OrderCompleted/OrderCompleted';

import history from './history/history';
import { Layout } from './components/Layout/Layout';

const store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={store.__PERSISTOR}>
            <ModalStateProvider>
                <Router history={history}>
                    <Switch>
                        <Route path="/order-completed" exact component={OrderCompleted} />
                        <Route path="/" component={Layout} />
                        <Route render={() => <h1>Not Found</h1>} />
                    </Switch>
                </Router>
            </ModalStateProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
