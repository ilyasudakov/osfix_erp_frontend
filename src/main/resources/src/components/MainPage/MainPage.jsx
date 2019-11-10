import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './MainPage.scss';
import Header from '../Header/Header.jsx';
import Clients from './Clients/Clients.jsx';
import SideMenu from '../SideMenu/SideMenu.jsx';
import Contracts from './Contracts/Contracts.jsx';
import Requests from './Requests/Requests.jsx';
import NewRequest from './Requests/NewRequest/NewRequest.jsx';
import GeneralPage from './GeneralPage/GeneralPage.jsx';
import newClient from './Clients/NewClient/NewClient.jsx';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main_page">
                <Header 
                    userData={this.props.userData}
                />
                <div className="main_page__content">
                    <SideMenu />
                    <div className="main_page__activity_panel">
                        <Switch>
                            <Route exact path="/" component={GeneralPage} />
                            <Route exact path="/clients" component={Clients} />
                            <Route exact path="/clients/new" component={newClient} />
                            <Route exact path="/contracts" component={Contracts} />
                            <Route exact path="/requests" component={Requests} />
                            <Route exact path="/requests/new" component={NewRequest} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;