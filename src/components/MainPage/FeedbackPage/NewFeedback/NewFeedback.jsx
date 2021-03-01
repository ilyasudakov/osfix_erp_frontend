import React, { useState } from 'react'
import './NewFeedback.scss'
import '../../../../utils/Form/Form.scss'
import InputText from '../../../../utils/Form/InputText/InputText.jsx'
import ImgLoader from '../../../../utils/TableView/ImgLoader/ImgLoader.jsx'
import { addFeedback } from '../../../../utils/RequestsAPI/Feedback/feedback'
import Button from '../../../../utils/Form/Button/Button.jsx'

const NewFeedback = (props) => {
  const [formInputs, setFormInputs] = useState({
    date: new Date().getTime() / 1000,
    subject: '',
    text: '',
    author: props.userData.username,
    status: 'in-progress',
  })
  const [formErrors, setFormErrors] = useState({
    subject: false,
    text: false,
  })
  const [validInputs, setValidInputs] = useState({
    subject: false,
    text: false,
  })
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    validateField(name, value)
    setFormInputs({
      ...formInputs,
      [name]: value,
    })
    setFormErrors({
      ...formErrors,
      [name]: false,
    })
  }

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      default:
        if (validInputs[fieldName] !== undefined) {
          setValidInputs({
            ...validInputs,
            [fieldName]: value !== '',
          })
        }
        break
    }
  }

  const formIsValid = () => {
    let check = true
    let newErrors = Object.assign({
      subject: false,
      text: false,
    })
    for (let item in validInputs) {
      if (validInputs[item] === false) {
        check = false
        newErrors = Object.assign({
          ...newErrors,
          [item]: true,
        })
      }
    }
    setFormErrors(newErrors)
    if (check === true) {
      return true
    } else {
      // alert("Форма не заполнена");
      setIsLoading(false)
      setShowError(true)
      return false
    }
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    setIsLoading(true)
    console.log(formInputs)
    formIsValid() &&
      addFeedback(formInputs)
        .then(() => {
          props.history.push('/feedback')
          setIsLoading(false)
        })
        .catch((error) => {
          alert('Ошибка при создании записи!')
          console.log(error)
          setIsLoading(false)
        })
  }

  return (
    <div className="new-feedback">
      <div className="main-form">
        <form className="main-form__form">
          <div className="main-form__header main-form__header--full">
            <div className="main-form__title">Создание обсуждения</div>
          </div>
          <InputText
            inputName="Тема"
            required
            name="subject"
            error={formErrors.subject}
            defaultValue={formInputs.subject}
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
            handleInputChange={handleInputChange}
          />
          <InputText
            inputName="Сообщение"
            required
            name="text"
            type="textarea"
            error={formErrors.text}
            defaultValue={formInputs.text}
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
            handleInputChange={handleInputChange}
          />
          <div className="main-form__input_hint">
            * - поля, обязательные для заполнения
          </div>
          <div className="main-form__buttons main-form__buttons--full">
            <input
              className="main-form__submit main-form__submit--inverted"
              type="submit"
              onClick={() => props.history.push('/feedback')}
              value="Вернуться назад"
            />
            {/* <input className="main-form__submit" type="submit" onClick={handleSubmit} value="Добавить обсуждение" />
                        {isLoading && <ImgLoader />} */}
            <Button
              text="Добавить обсуждение"
              isLoading={isLoading}
              className="main-form__submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewFeedback