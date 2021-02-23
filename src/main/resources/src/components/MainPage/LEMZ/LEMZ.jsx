import React, { Suspense } from "react";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.jsx";
import { Route, Switch, Link } from "react-router-dom";
import PlusImg from "../../../../../../../assets/sidemenu/plus.inline.svg";
import "./LEMZ.scss";
import "../../../utils/MainWindow/MainWindow.scss";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import PageLoading from "../PageLoading/PageLoading.jsx";
import {
  WorkshopLEMZ,
  Storage,
  NewStorage,
  EditStorage,
  WorkshopOrders,
  NewWorkshopOrderLEMZ,
  ViewWorkshopOrderLEMZ,
  EditWorkshopOrderLEMZ,
  NewRequest,
  EditRequest,
  ShipRequest,
} from "../lazyImports.jsx";

const LEMZ = (props) => {
  return (
    <div className="requests-lemz">
      <div className="main-window">
        <div className="main-window__header main-window__header--full">
          <div className="main-window__title">Цех ЛЭМЗ</div>
          <div className="main-window__menu">
            <Link
              to="/lemz/workshop-lemz"
              className={
                props.location.pathname.includes("/lemz/workshop-lemz") === true
                  ? "main-window__item--active main-window__item"
                  : "main-window__item"
              }
            >
              Очередь производства
              <Link
                to="/lemz/workshop-lemz/new"
                className="main-window__addButton"
              >
                <PlusImg className="main-window__img" alt="" />
              </Link>
            </Link>
            <Link
              to="/lemz/workshop-storage"
              className={
                props.location.pathname.includes("/lemz/workshop-storage") ===
                true
                  ? "main-window__item--active main-window__item"
                  : "main-window__item"
              }
            >
              Склад
              <Link
                to="/lemz/workshop-storage/new"
                className="main-window__addButton"
              >
                <PlusImg className="main-window__img" alt="" />
              </Link>
            </Link>
            <Link
              to="/lemz/workshop-orders"
              className={
                props.location.pathname.includes("/lemz/workshop-orders") ===
                true
                  ? "main-window__item--active main-window__item"
                  : "main-window__item"
              }
            >
              Комплектация Цеха
              <Link
                to="/lemz/workshop-orders/new"
                className="main-window__addButton"
              >
                <PlusImg className="main-window__img" alt="" />
              </Link>
            </Link>
          </div>
        </div>
        <div className="main-window__content">
          <Suspense fallback={<PageLoading />}>
            <Switch>
              <PrivateRoute
                exact
                path="/lemz/workshop-lemz/new"
                component={NewRequest}
                type="lemz"
                allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                path="/lemz/workshop-lemz/edit/"
                component={EditRequest}
                type="lemz"
                allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                path="/lemz/workshop-lemz/ship/"
                component={ShipRequest}
                type="lemz"
                allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                path="/lemz/workshop-lemz/"
                component={WorkshopLEMZ}
                userHasAccess={props.userHasAccess}
                allowedRoles={["ROLE_ADMIN", "ROLE_ENGINEER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                exact
                path="/lemz/workshop-storage"
                component={Storage}
                userHasAccess={props.userHasAccess}
                allowedRoles={[
                  "ROLE_ADMIN",
                  // 'ROLE_DISPATCHER',
                  "ROLE_ENGINEER",
                  "ROLE_LEMZ",
                ]}
              />
              <PrivateRoute
                exact
                path="/lemz/workshop-storage/new"
                component={NewStorage}
                userHasAccess={props.userHasAccess}
                userData={props.userData}
                allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                path="/lemz/workshop-storage/edit/"
                component={EditStorage}
                userHasAccess={props.userHasAccess}
                userData={props.userData}
                allowedRoles={["ROLE_ADMIN", "ROLE_MANAGER", "ROLE_LEMZ"]}
              />
              <PrivateRoute
                exact
                path="/lemz/workshop-orders"
                component={WorkshopOrders}
                type="lemz"
                allowedRoles={[
                  "ROLE_ADMIN",
                  "ROLE_DISPATCHER",
                  "ROLE_ENGINEER",
                  "ROLE_LEMZ",
                ]}
              />
              <PrivateRoute
                exact
                path="/lemz/workshop-orders/new"
                component={NewWorkshopOrderLEMZ}
                userHasAccess={props.userHasAccess}
                allowedRoles={[
                  "ROLE_ADMIN",
                  // 'ROLE_DISPATCHER',
                  "ROLE_ENGINEER",
                  "ROLE_LEMZ",
                ]}
              />
              <PrivateRoute
                path="/lemz/workshop-orders/view/"
                component={ViewWorkshopOrderLEMZ}
                userHasAccess={props.userHasAccess}
                allowedRoles={[
                  "ROLE_ADMIN",
                  "ROLE_DISPATCHER",
                  "ROLE_ENGINEER",
                  "ROLE_LEMZ",
                ]}
              />
              <PrivateRoute
                path="/lemz/workshop-orders/edit/"
                component={EditWorkshopOrderLEMZ}
                userHasAccess={props.userHasAccess}
                allowedRoles={["ROLE_ADMIN", "ROLE_DISPATCHER"]}
              />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LEMZ;
