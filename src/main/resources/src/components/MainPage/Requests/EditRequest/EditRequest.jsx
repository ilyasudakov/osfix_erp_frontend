import React, { useEffect, useState } from 'react';
import './EditRequest.scss';
import { getRequestById, editRequest, getProducts, addProductsToRequest, getUsers, editProductsToRequest, deleteProductsToRequest } from '../../../../utils/utilsAPI.jsx';
import Select from '../../Select/Select.jsx';
import InputDate from '../../../../utils/Form/InputDate/InputDate.jsx';
import InputText from '../../../../utils/Form/InputText/InputText.jsx';
import InputUser from '../../../../utils/Form/InputUser/InputUser.jsx';
import InputProducts from '../../../../utils/Form/InputProducts/InputProducts.jsx';

const EditRequest = (props) => {
    const [requestId, setRequestId] = useState(1);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [requestInputs, setRequestInputs] = useState({
        date: "",
        products: [],
        quantity: "",
        codeWord: "",
        responsible: "",
        status: "Не готово"
    })
    const [requestErrors, setRequestErrors] = useState({
        date: false,
        requestProducts: false,
        codeWord: false,
        responsible: false,
    })
    const [validInputs, setValidInputs] = useState({
        date: true,
        requestProducts: true,
        codeWord: true,
        responsible: true,
    })

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'date':
                setValidInputs({
                    ...validInputs,
                    date: (value !== null)
                });
                break;
            case 'requestProducts':
                setValidInputs({
                    ...validInputs,
                    requestProducts: (value.length > 0)
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
            products: false,
            codeWord: false,
            responsible: false,
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
        formIsValid() && editRequest(requestInputs, requestId)
            .then(() => {
                //PUT if edited, POST if product is new
                const productsArr = selectedProducts.map((selected) => {
                    let edited = false;
                    requestInputs.products.map((item) => {
                        if (item.id === selected.id) {
                            edited = true;
                            return;
                        }
                    });
                    return (edited === true)
                        ? (
                            editProductsToRequest({
                                requestId: requestId,
                                quantity: selected.quantity,
                                packaging: selected.packaging,
                                name: selected.name
                            }, selected.id)
                        )
                        : (
                            addProductsToRequest({
                                requestId: requestId,
                                quantity: selected.quantity,
                                packaging: selected.packaging,
                                name: selected.name
                            })
                        )
                })
                Promise.all(productsArr)
                    .then(() => {
                        //DELETE products removed by user
                        const productsArr = requestInputs.products.map((item) => {
                            let deleted = true;
                            selectedProducts.map((selected) => {
                                if (selected.id === item.id) {
                                    deleted = false;
                                    return;
                                }
                            })
                            return (deleted === true && deleteProductsToRequest(item.id));
                        })
                        Promise.all(productsArr)
                            .then(() => {
                                props.history.push("/requests")
                            })
                    })
            })
            .catch(error => {
                alert('Ошибка при добавлении записи')
                console.log(error);
            })
    }

    const handleInputChange = (e) => {
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

    const handleDateChange = (date) => {
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

    const handleProductsChange = (newProducts) => {
        validateField("requestProducts", newProducts);
        setSelectedProducts(newProducts);
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

    useEffect(() => {
        document.title = "Редактирование заявки";
        const id = props.history.location.pathname.split("/requests/edit/")[1];
        if (isNaN(Number.parseInt(id))) {
            alert('Неправильный индекс заявки!');
            props.history.push("/requests");
        } else {
            setRequestId(id);
            getRequestById(id)
                .then(res => res.json())
                .then(oldRequest => {
                    // console.log(oldRequest.requestProducts);
                    setRequestInputs({
                        date: oldRequest.date,
                        products: oldRequest.requestProducts,
                        quantity: oldRequest.quantity,
                        codeWord: oldRequest.codeWord,
                        responsible: oldRequest.responsible,
                        status: oldRequest.status
                    });
                    setSelectedProducts(oldRequest.requestProducts);
                })
                .catch(error => {
                    console.log(error);
                    alert('Неправильный индекс заявки!');
                    props.history.push("/requests");
                })
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
        }
    }, [])

    return (
        <div className="edit_request">
            <div className="edit_request__title">Редактирование заявки</div>
            <form className="edit_request__form">
                <InputDate
                    inputName="Дата"
                    required
                    error={requestErrors.date}
                    name="date"
                    selected={Date.parse(requestInputs.date)}
                    handleDateChange={handleDateChange}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputProducts
                    inputName="Продукция"
                    required
                    options={products}
                    onChange={handleProductsChange}
                    defaultValue={selectedProducts}
                    searchPlaceholder="Введите название продукта для поиска..."
                    error={requestErrors.requestProducts}
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <InputText
                    inputName="Кодовое слово"
                    required
                    error={requestErrors.codeWord}
                    name="codeWord"
                    handleInputChange={handleInputChange}
                    defaultValue={requestInputs.codeWord}
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
                    defaultValue={requestInputs.responsible}
                    searchPlaceholder="Введите имя пользователя для поиска..."
                    errorsArr={requestErrors}
                    setErrorsArr={setRequestErrors}
                />
                <div className="edit_request__item">
                    <div className="edit_request__input_name">Статус*</div>
                    <div className="edit_request__input_field">
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
                <div className="edit_request__input_hint">* - поля, обязательные для заполнения</div>
                <input className="edit_request__submit" type="submit" onClick={handleSubmit} value="Обновить данные" />
            </form>
        </div>
    );
};

export default EditRequest;