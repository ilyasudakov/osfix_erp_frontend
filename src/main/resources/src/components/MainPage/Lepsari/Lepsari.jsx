import React, { Suspense } from 'react';
import PrivateRoute from '../../PrivateRoute/PrivateRoute.jsx';
import { Route, Switch, Link } from 'react-router-dom';
import plusImg from '../../../../../../../assets/sidemenu/plus_icon.svg';
import './Lepsari.scss';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import PageLoading from '../PageLoading/PageLoading.jsx';
import { WorkshopLEMZ, Storage, ViewRequestLEMZ, EditRequestLEMZ, NewRequestLEMZ, NewStorage, EditStorage, WorkshopLepsari, NewRequestLepsari, EditRequestLepsari, ViewRequestLepsari } from '../lazyImports.jsx';

const Lepsari = (props) => {
    return (
        <div className="requests">
            <div className="requests__header">
                <div className="requests__title">Лепсари</div>
                <div className="requests__menu">
                    <Link to="/lepsari/workshop-lepsari" className={props.location.pathname.includes('/lepsari/workshop-lepsari') === true
                        ? "requests__item--active requests__item"
                        : "requests__item"}>
                        Очередь производства
                            <Link to="/lepsari/workshop-lepsari/new" className="requests__addButton">
                            <img className="requests__img" src={plusImg} alt="" />
                        </Link>
                    </Link>
                    {/* <Link to="/lepsari/workshop-storage" className={props.location.pathname.includes('/lepsari/workshop-storage') === true
                        ? "requests__item--active requests__item"
                        : "requests__item"}>
                        Склад
                            <Link to="/lepsari/workshop-storage/new" className="requests__addButton">
                            <img className="requests__img" src={plusImg} alt="" />
                        </Link>
                    </Link> */}
                </div>
            </div>
            <div className="requests__content">
                <Suspense fallback={PageLoading}>
                    <Switch>
                        <PrivateRoute
                            exact path="/lepsari/workshop-lepsari"
                            component={WorkshopLepsari}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                        />
                        <Route path="/lepsari/workshop-lepsari/view/" component={ViewRequestLepsari} />
                        <PrivateRoute
                            exact path="/lepsari/workshop-lepsari/new"
                            component={NewRequestLepsari}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
                        />
                        <PrivateRoute
                            path="/lepsari/workshop-lepsari/edit/"
                            component={EditRequestLepsari}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
                        />
                        <PrivateRoute
                            exact path="/lepsari/workshop-storage"
                            component={Storage}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER']}
                        />

                        <PrivateRoute
                            exact path="/lepsari/workshop-storage/new"
                            component={NewStorage}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                        />
                        <PrivateRoute
                            path="/lepsari/workshop-storage/edit/"
                            component={EditStorage}
                            userHasAccess={props.userHasAccess}
                            allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_WORKSHOP"]}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

export default Lepsari;