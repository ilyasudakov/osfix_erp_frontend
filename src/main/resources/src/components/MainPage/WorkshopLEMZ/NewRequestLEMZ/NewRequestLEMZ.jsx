import React, { useState, useEffect } from 'react';
import { getProducts, addRequestLEMZ, getUsers, addProductsToRequestLEMZ } from '../../../../utils/utilsAPI.jsx';
import Select from '../../Select/Select.jsx';
import './NewRequestLEMZ.scss';
import InputDate from '../../../../utils/Form/InputDate/InputDate.jsx';
import InputText from '../../../../utils/Form/InputText/InputText.jsx';
import InputUser from '../../../../utils/Form/InputUser/InputUser.jsx';
import InputProducts from '../../../../utils/Form/InputProducts/InputProducts.jsx';

const NewRequestLEMZ = (props) => {
    const [requestInputs, setRequestInputs] = useState({
        date: new Date(),
        codeWord: "",
        responsible: "",
        status: "Проблема",
        shippingDate: new Date(),
        comment: ''
    })
    const [requestErrors, setRequestErrors] = useState({
        date: false,
        requestProducts: false,
        codeWord: false,
        responsible: false,
        shippingDate: false
    })
    const [validInputs, setValidInputs] = useState({
        date: true,
        requestProducts: false,
        codeWord: false,
        responsible: false,
        shippingDate: true
    })
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'date':
                setValidInputs({
                    ...validInputs,
                    date: (value !== null)
                });
                break;
            case 'shippingDate':
                setValidInputs({
                    ...validInputs,
                    shippingDate: (value !== null)
                });
                break;
            case 'requestProducts':
                setValidInputs({
                    ...validInputs,
                    requestProducts: (value !== [])
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
            date: false,
            requestProducts: false,
            codeWord: false,
            responsible: false,
            shippingDate: false
        });
        for (let item in validInputs) {
            if (validInputs[item] === false) {
                check = false;
                newErrors = Object.assign({
                    ...newErrors,
                    [item]: true
                })
            }
        }
        setRequestErrors(newErrors);
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
        let id = 0;
        // console.log(requestInputs);
        formIsValid() && addRequestLEMZ(requestInputs)
            .then(res => res.json())
            .then(res => {
                id = res.id;
            })
            .then(() => {
                const productsArr = requestInputs.requestProducts.map((item) => {
                    return addProductsToRequestLEMZ({
                        requestId: id,
                        quantity: item.quantity,
                        packaging: item.packaging,
                        name: item.name
                    })
                })
                Promise.all(productsArr)
                    .then(() => props.history.push("/workshop-lemz"))
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        validateField(name, value);
        setRequestInputs({
            ...requestInputs,
            [name]: value
        })
        setRequestErrors({
            ...requestErrors,
            [name]: false
        })
    }

    useEffect(() => {
        document.title = "Создание заявки ЛЭМЗ";
        getProducts()
            .then(res => res.json())
            .then(response => {
                setProducts(response);
            })
            .then(() => getUsers())
            .then(res => res.json())
            .then(res => {
                setUsers(res);
            })
    }, [])

    const handleDateChange = (date) => {
        const regex = "(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.[12]\d{3})";
        validateField("date", date);
        setRequestInputs({
            ...requestInputs,
            date: date
        })
        setRequestErrors({
            ...requestErrors,
            date: false
        })
    }

    const handleDateShippedChange = (date) => {
        const regex = "(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.[12]\d{3})";
        validateField("date", date);
        setRequestInputs({
            ...requestInputs,
            shippingDate: date
        })
        setRequestErrors({
            ...requestErrors,
            shippingDate: false
        })
    }

    const handleProductsChange = (newProducts) => {
        validateField("requestProducts", newProducts)
        setRequestInputs({
            ...requestInputs,
            requestProducts: newProducts
        })
        setRequestErrors({
            ...requestErrors,
            requestProducts: false
        })
    }

    const handleResponsibleChange = (newResponsible) => {
        validateField("responsible", newResponsible)
        setRequestInputs({
            ...requestInputs,
            responsible: newResponsible
        })
        setRequestErrors({
            ...requestErrors,
            responsible: false
        })
    }

    return (
        <div className="new_request_lemz">
            <div className="new_request_lemz__title">Новая заявка ЛЭМЗ</div>
            <form className="new_request_lemz__form">
                <InputDate
                    inputName="Дата заявки"
                    required
                    error={requestErrors.date}
                    name="date"
                    selected={requestInputs.date}
                    handleDateChange={handleDateChange}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputProducts
                    inputName="Продукция"
                    required
                    options={products}
                    name="requestProducts"
                    onChange={handleProductsChange}
                    error={requestErrors.requestProducts}
                    searchPlaceholder="Введите название продукта для поиска..."
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputText
                    inputName="Кодовое слово"
                    required
                    error={requestErrors.codeWord}
                    name="codeWord"
                    handleInputChange={handleInputChange}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputUser
                    inputName="Ответственный"
                    required
                    error={requestErrors.responsible}
                    name="responsible"
                    options={users}
                    handleUserChange={handleResponsibleChange}
                    searchPlaceholder="Введите имя пользователя для поиска..."
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <div className="new_request_lemz__item">
                    <div className="new_request_lemz__input_name">Статус*</div>
                    <div className="new_request_lemz__input_field">
                        <select
                            name="status"
                            onChange={handleInputChange}
                            value={requestInputs.status}
                        >
                            <option value="Проблема">Проблема</option>
                            <option value="Материалы">Материалы</option>
                            <option value="Ожидание">Ожидание</option>
                            <option value="В производстве">В производстве</option>
                            <option value="Готово">Готово</option>
                            <option value="Завершено">Завершено</option>
                            <option value="Отгружено">Отгружено</option>
                            <option value="Приоритет">Приоритет</option>
                        </select>
                    </div>
                </div>
                <InputDate
                    inputName="Дата отгрузки"
                    name="shippingDate"
                    selected={requestInputs.shippingDate}
                    handleDateChange={handleDateShippedChange}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputText
                    inputName="Комментарий"
                    name="comment"
                    handleInputChange={handleInputChange}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <div className="new_request_lemz__input_hint">* - поля, обязательные для заполнения</div>
                <input className="new_request_lemz__submit" type="submit" onClick={handleSubmit} value="Оформить заявку" />
            </form>
        </div>
    );
};

export default NewRequestLEMZ;