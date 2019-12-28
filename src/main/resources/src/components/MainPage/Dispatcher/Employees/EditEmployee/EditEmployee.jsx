import React, { useEffect, useState } from 'react';
import './EditEmployee.scss';
import { getEmployeeById, editEmployee } from '../../../../../utils/utilsAPI.jsx';
import InputText from '../../../../../utils/Form/InputText/InputText.jsx';
import InputDate from '../../../../../utils/Form/InputDate/InputDate.jsx';

const EditEmployee = (props) => {
    const [employeeInputs, setEmployeeInputs] = useState({
        name: '',
        lastName: '',
        middleName: '',
        yearOfBirth: '',
        citizenship: '',
        position: '',
        workshop: 'ЦехЛЭМЗ',
        passportScan1: '',
        comment: '',
        relevance: 'Работает'
    })
    const [employeeId, setEmployeeId] = useState(1);

    const [employeeErrors, setEmployeeErrors] = useState({
        name: false,
        lastName: false,
        middleName: false,
        yearOfBirth: false,
        citizenship: false,
        position: false,
        workshop: false,
        // passportScan1: false,
        // comment: false,
        relevance: false
    })
    const [validInputs, setValidInputs] = useState({
        name: true,
        lastName: true,
        middleName: true,
        yearOfBirth: true,
        citizenship: true,
        position: true,
        workshop: true,
        // passportScan1: false,
        // comment: false,
        relevance: true
    })
    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'yearOfBirth':
                setValidInputs({
                    ...validInputs,
                    yearOfBirth: (value !== null)
                });
                break;
            default:
                setValidInputs({
                    ...validInputs,
                    [fieldName]: (value !== "")
                });
                break;
        }
    }

    const formIsValid = () => {
        let check = true;
        let newErrors = Object.assign({
            name: false,
            lastName: false,
            middleName: false,
            yearOfBirth: false,
            citizenship: false,
            position: false,
            workshop: false,
            // passportScan1: false,
            // comment: false,
            relevance: false
        });
        for (let item in validInputs) {
            // console.log(item, validInputs[item]);            
            if (validInputs[item] === false) {
                check = false;
                newErrors = Object.assign({
                    ...newErrors,
                    [item]: true
                })
            }
        }
        setEmployeeErrors(newErrors);
        if (check === true) {
            return true;
        }
        else {
            alert("Форма не заполнена");
            return false;
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formIsValid() && editEmployee(employeeInputs, employeeId)
            .then(() => props.history.push("/dispatcher/employees"))
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        validateField(name, value);
        setEmployeeInputs({
            ...employeeInputs,
            [name]: value
        })
        setEmployeeErrors({
            ...employeeErrors,
            [name]: false
        })
    }

    useEffect(() => {
        document.title = "Редактирование сотрудника";
        const id = props.history.location.pathname.split("/dispatcher/employees/edit/")[1];
        if (isNaN(Number.parseInt(id))) {
            alert('Неправильный индекс сотрудника!');
            props.history.push("/dispatcher/employees");
        } else {
            setEmployeeId(id);
            getEmployeeById(id)
                .then(res => res.json())
                .then(oldRequest => {
                    setEmployeeInputs({
                        name: oldRequest.name,
                        lastName: oldRequest.lastName,
                        middleName: oldRequest.middleName,
                        yearOfBirth: oldRequest.yearOfBirth,
                        citizenship: oldRequest.citizenship,
                        position: oldRequest.position,
                        workshop: oldRequest.workshop,
                        passportScan1: oldRequest.passportScan1,
                        comment: oldRequest.comment,
                        relevance: oldRequest.relevance
                    });
                })
                .catch(error => {
                    console.log(error);
                    alert('Неправильный индекс сотрудника!');
                    props.history.push("/dispatcher/employees");
                })
        }
    }, [])

    // const [imgName, setImgName] = useState([]);
    const [imgName, setImgName] = useState('');
    const handleFileInputChange = (event) => {
        let regex = /.+\.(jpeg|jpg|png|img)/;
        let file = Array.from(event.target.files);
        file.map((photo, index) => {
            if (photo.name.match(regex) !== null && index === 0) {
                // let prevNames = imgName;
                // prevNames.push(photo.name);
                // setImgName(prevNames);
                setImgName(photo.name)
                let reader = new FileReader();
                reader.onloadend = (() => {
                    // let prevScans = employeeInputs.passportScan1;
                    // prevScans.push(reader.result);
                    setEmployeeInputs({
                        ...employeeInputs,
                        passportScan1: reader.result
                    })
                });
                reader.readAsDataURL(photo);
            }
        })
    }

    const handleDateChange = (date) => {
        const regex = "(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.[12]\d{3})";
        validateField("yearOfBirth", date);
        setEmployeeInputs({
            ...employeeInputs,
            yearOfBirth: date
        })
        setEmployeeErrors({
            ...employeeErrors,
            yearOfBirth: false
        })
    }

    return (
        <div className="edit_employee">
            <div className="edit_employee__title">Редактирование сотрудника</div>
            <form className="edit_employee__form">
                <InputText
                    inputName="Имя"
                    required
                    error={employeeErrors.name}
                    defaultValue={employeeInputs.name}
                    name="name"
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                    handleInputChange={handleInputChange}
                />
                <InputText
                    inputName="Фамилия"
                    required
                    error={employeeErrors.lastName}
                    defaultValue={employeeInputs.lastName}
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                    name="lastName"
                    handleInputChange={handleInputChange}
                />
                <InputText
                    inputName="Отчество"
                    required
                    error={employeeErrors.middleName}
                    name="middleName"
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                    defaultValue={employeeInputs.middleName}
                    handleInputChange={handleInputChange}
                />
                <InputDate
                    inputName="Дата рождения"
                    required
                    error={employeeErrors.yearOfBirth}
                    name="yearOfBirth"
                    selected={Date.parse(employeeInputs.yearOfBirth)}
                    handleDateChange={handleDateChange}
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                />
                <InputText
                    inputName="Гражданство"
                    required
                    error={employeeErrors.citizenship}
                    name="citizenship"
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                    defaultValue={employeeInputs.citizenship}
                    handleInputChange={handleInputChange}
                />
                <div className="edit_employee__item">
                    <div className="edit_employee__input_name">Цех*</div>
                    <div className="edit_employee__input_field">
                        <select
                            name="workshop"
                            onChange={handleInputChange}
                            value={employeeInputs.workshop}
                        >
                            <option value="ЦехЛЭМЗ">ЦехЛЭМЗ</option>
                            <option value="ЦехЛепсари">ЦехЛепсари</option>
                            <option value="ЦехЛиговский">ЦехЛиговский</option>
                        </select>
                    </div>
                </div>
                <InputText
                    inputName="Должность"
                    required
                    error={employeeErrors.position}
                    name="position"
                    defaultValue={employeeInputs.position}
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                    handleInputChange={handleInputChange}
                />
                {employeeInputs.passportScan1 && <div className="edit_employee__item">
                    <div className="edit_employee__input_name">Паспорт</div>
                    <div className="edit_employee__passport_img">
                        {/* {employeeInputs.passportScan.map((photo) => (
                            <img src={photo} alt=""/>
                        ))} */}
                        <img src={employeeInputs.passportScan1} alt="" />
                    </div>
                </div>}
                <div className="edit_employee__item">
                    <div className="edit_employee__input_name">Паспорт*</div>
                    <div className="edit_employee__file_upload">
                        <div className="edit_employee__file_name">
                            {/* {imgName.map((photo) => {
                                return (
                                    <div>
                                        {photo}
                                    </div>
                                )
                            })} */}
                            {imgName}
                        </div>
                        <label className="edit_employee__label" htmlFor="file">
                            Загрузить файл
                                {/* <img className="logo" src={fileUploadImg} alt="" /> */}
                        </label>
                        <input type="file" name="passportScan1" id="file" onChange={handleFileInputChange} />
                    </div>
                </div>
                <InputText
                    inputName="Комментарий"
                    // required
                    // error={employeeErrors.comment}
                    name="comment"
                    defaultValue={employeeInputs.comment}
                    handleInputChange={handleInputChange}
                    errorsArr={employeeErrors}
                    setErrorsArr={setEmployeeErrors}
                />
                <div className="edit_employee__item">
                    <div className="edit_employee__input_name">Актуальность*</div>
                    <div className="edit_employee__input_field">
                        <select
                            name="relevance"
                            onChange={handleInputChange}
                            value={employeeInputs.relevance}
                        >
                            <option value="Работает">Работает</option>
                            <option value="Уволен">Уволен</option>
                        </select>
                    </div>
                </div>
                <div className="edit_employee__input_hint">* - поля, обязательные для заполнения</div>
                <input className="edit_employee__submit" type="submit" onClick={handleSubmit} value="Изменить сотрудника" />
            </form>
        </div>
    );
};

export default EditEmployee;