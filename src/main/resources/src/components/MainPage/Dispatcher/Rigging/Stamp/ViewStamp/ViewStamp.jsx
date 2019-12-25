import React, { useState, useEffect } from 'react';
import './ViewStamp.scss';
import SelectParts from '../../SelectParts/SelectParts.jsx';

const ViewStamp = (props) => {
    const [stampInputs, setStampInputs] = useState({
        name: '',
        number: '',
        comment: '',
        parts: []
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push("/dispatcher/rigging/stamp");
    }

    useEffect(() => {
        document.title = "Просмотр штампа";
    }, [])

    return (
        <div className="view_stamp">
            <div className="view_stamp__title">Просмотр штампа</div>
            <form className="view_stamp__form">
                <div className="view_stamp__item">
                    <div className="view_stamp__input_name">Название</div>
                    <div className="view_stamp__input_field">
                        <input type="text"
                            name="name"
                            autoComplete="off"
                            readOnly
                            defaultValue={stampInputs.name}
                        />
                    </div>
                </div>
                <div className="view_stamp__item">
                    <div className="view_stamp__input_name">Артикул</div>
                    <div className="view_stamp__input_field">
                        <input type="text"
                            name="number"
                            autoComplete="off"
                            readOnly
                            defaultValue={stampInputs.number}
                        />
                    </div>
                </div>
                <div className="view_stamp__item">
                    <div className="view_stamp__input_name">Комментарий</div>
                    <div className="view_stamp__input_field">
                        <input type="text"
                            name="comment"
                            autoComplete="off"
                            readOnly
                            defaultValue={stampInputs.comment}
                        />
                    </div>
                </div>
                <div className="view_stamp__item">
                    <div className="view_stamp__input_name">Детали</div>
                    <div className="view_stamp__input_field">
                        <SelectParts
                            readOnly
                            defaultValue={stampInputs.parts}
                        />
                    </div>
                </div>
                <input className="view_stamp__submit" type="submit" onClick={handleSubmit} value="Вернуться назад" />
            </form>
        </div>
    )
}

export default ViewStamp;