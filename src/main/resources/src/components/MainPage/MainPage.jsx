import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './MainPage.scss';
import Header from '../Header/Header.jsx';
import {
    Clients, Contracts, Requests, NewRequest, GeneralPage, newClient, Products,
    NewProduct, EditRequest, ViewRequest, Users, EditUser, NewUser, ViewProduct, EditProduct, WorkshopLEMZ,
    NewRequestLEMZ, ViewRequestLEMZ, EditRequestLEMZ, Rigging, Transportation, EditTransportation, NewTransportation,
    GeneralTasks, NewTask, EditTask, Employees, NewEmployee, EditEmployee, ViewEmployee, Work, NewWork, EditWork, WorkshopLepsari, NewRequestLepsari, ViewRequestLepsari, EditRequestLepsari, Storage, NewStorage, EditStorage, NewCategory, EditCategory
} from './lazyImports.jsx';
import SideMenu from '../SideMenu/SideMenu.jsx';
import PageNotFound from './PageNotFound/PageNotFound.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import PageLoading from './PageLoading/PageLoading.jsx';

class MainPage extends React.Component {
    state = {
        sidemenu_hidden: false,
    }

    setSideMenu = (sidemenu_hidden) => {
        this.setState({
            sidemenu_hidden: sidemenu_hidden
        })
    }

    clickOverlay = (event) => {
        const overlay = document.getElementsByClassName("main_page__overlay")[0];
        overlay.classList.contains("main_page__overlay--hidden")
            ? overlay.classList.remove("main_page__overlay--hidden")
            : overlay.classList.add("main_page__overlay--hidden");
    }

    componentDidMount() {
        // console.log(this.props.userData);
    }

    render() {
        return (
            <div className="main_page">
                <Header
                    userData={this.props.userData}
                    sideMenu={this.state.sidemenu_hidden}
                    setSideMenu={this.setSideMenu}
                    clickOverlay={this.clickOverlay}
                    userHasAccess={this.props.userHasAccess}
                />
                <div className="main_page__content">
                    <SideMenu
                        userHasAccess={this.props.userHasAccess}
                        hidden={this.state.sidemenu_hidden}
                    />
                    <Suspense fallback={PageLoading}>
                        <div className="main_page__activity_panel">
                            <Switch>
                                {/* <Route exact path="/" component={GeneralPage} /> */}
                                <PrivateRoute
                                    exact path="/"
                                    component={GeneralPage}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_WORKSHOP", "ROLE_MANAGER", "ROLE_DISPATCHER", "ROLE_ENGINEER"]}
                                />
                                <PrivateRoute
                                    exact path="/profile/users/new"
                                    component={NewUser}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN"]}
                                />
                                <PrivateRoute
                                    exact path="/profile/users"
                                    component={Users}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN"]}
                                />
                                <PrivateRoute
                                    path="/profile/users/edit/"
                                    component={EditUser}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN"]}
                                />
                                <Route exact path="/clients" component={Clients} />
                                <Route exact path="/clients/new" component={newClient} />
                                <Route exact path="/contracts" component={Contracts} />
                                <PrivateRoute
                                    exact path="/requests"
                                    component={Requests}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <Route path="/requests/view/" component={ViewRequest} />
                                <PrivateRoute
                                    exact path="/requests/new"
                                    component={NewRequest}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <PrivateRoute
                                    path="/requests/edit/"
                                    component={EditRequest}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <PrivateRoute
                                    exact path="/products"
                                    component={Products}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                                />
                                <Route path="/products/view/" component={ViewProduct} />
                                <PrivateRoute
                                    path="/products/edit/"
                                    component={EditProduct}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <PrivateRoute
                                    exact path="/products/new"
                                    component={NewProduct}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <PrivateRoute
                                    exact path="/workshop-lemz"
                                    component={WorkshopLEMZ}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
                                />
                                <Route path="/workshop-lemz/view/" component={ViewRequestLEMZ} />
                                <PrivateRoute
                                    exact path="/workshop-lemz/new"
                                    component={NewRequestLEMZ}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
                                />
                                <PrivateRoute
                                    path="/workshop-lemz/edit/"
                                    component={EditRequestLEMZ}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
                                />
                                <PrivateRoute
                                    path="/dispatcher/rigging"
                                    component={Rigging}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/transportation"
                                    component={Transportation}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/transportation/new"
                                    component={NewTransportation}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    path="/dispatcher/transportation/edit/"
                                    component={EditTransportation}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/general-tasks"
                                    component={GeneralTasks}
                                    userData={this.props.userData}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER', 'ROLE_WORKSHOP']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/general-tasks/new"
                                    component={NewTask}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                                />
                                <PrivateRoute
                                    path="/dispatcher/general-tasks/edit/"
                                    component={EditTask}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER', 'ROLE_WORKSHOP']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/employees"
                                    component={Employees}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    exact path="/dispatcher/employees/new"
                                    component={NewEmployee}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    path="/dispatcher/employees/edit/"
                                    component={EditEmployee}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    path="/dispatcher/employees/view/"
                                    component={ViewEmployee}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                                />
                                <PrivateRoute
                                    exact path="/work-list"
                                    component={Work}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                                />
                                <PrivateRoute
                                    exact path="/work-list/new"
                                    component={NewWork}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                                />
                                <PrivateRoute
                                    path="/work-list/edit/"
                                    component={EditWork}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                                />
                                <PrivateRoute
                                    exact path="/workshop-lepsari"
                                    component={WorkshopLepsari}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEPSARI"]}
                                />
                                <PrivateRoute
                                    exact path="/workshop-lepsari/new"
                                    component={NewRequestLepsari}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEPSARI"]}
                                />
                                <PrivateRoute
                                    path="/workshop-lepsari/view/"
                                    component={ViewRequestLepsari}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEPSARI"]}
                                />
                                <PrivateRoute
                                    path="/workshop-lepsari/edit/"
                                    component={EditRequestLepsari}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEPSARI"]}
                                />
                                <PrivateRoute
                                    exact path="/workshop-storage"
                                    component={Storage}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                                />
                                <PrivateRoute
                                    exact path="/workshop-storage/new"
                                    component={NewStorage}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                                />
                                <PrivateRoute
                                    path="/workshop-storage/edit/"
                                    component={EditStorage}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                                />
                                <PrivateRoute
                                    exact path="/products/category/new"
                                    component={NewCategory}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                                />
                                <PrivateRoute
                                    path="/products/category/edit/"
                                    component={EditCategory}
                                    userHasAccess={this.props.userHasAccess}
                                    allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER"]}
                                />
                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default MainPage;