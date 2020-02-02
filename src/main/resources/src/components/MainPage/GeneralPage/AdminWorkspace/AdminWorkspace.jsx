import React from 'react';
import './AdminWorkspace.scss';
import XLSX from 'xlsx';
import { Notifications, WorkManagement } from '../../lazyImports.jsx';

const AdminWorkspace = (props) => {


    return (
        <div className="admin-workspace">
            <WorkManagement
                userHasAccess={props.userHasAccess}
            />
            {props.userHasAccess(['ROLE_ADMIN']) && <Notifications
                userHasAccess={props.userHasAccess}
            />}
            {/* <button className="admin-workspace__button" onClick={exportCSVFile}>Скачать Табель</button> */}
        </div>
    );
};

export default AdminWorkspace;