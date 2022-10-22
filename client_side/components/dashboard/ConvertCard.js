import React from 'react';
import dashST from '../../../styles/dashboard.module.css';

const ConvertCard = ({user,convertCard}) => {
    return (
        <div className={`p-7 ${dashST.user_status_card}`}>
            <p className={`m-2`}>{user.name}</p>
            <p className={`m-2`}>{convertCard.card_status}</p>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character limit:</p>
                <p className={`m-2`}>{convertCard.character_limit}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.character_limit_reamining}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.character_limit_per_req}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.character_limit_per_req_reamining}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.file_count}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.package_expire?.split("T")[0]}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.package_start?.split("T")[0]}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.req_per_day}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.size}</p>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Character remaining:</p>
                <p className={`m-2`}>{convertCard.req_per_day_reamining?.req_reamining}</p>
            </div>
            
        </div>
    );
};

export default ConvertCard;