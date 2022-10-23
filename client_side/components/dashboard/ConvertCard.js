import React from 'react';
import dashST from '../../../styles/dashboard.module.css';

const ConvertCard = ({user,convertCard}) => {
    return (
        // <div className={`p-7 ${dashST.user_status_card}`}>
        <div>
            <p className={`m-0 text-center ${dashST.card_name}`}>{user.name}</p>
            <p className={`m-0 text-center ${dashST.card_status}`}>{convertCard.card_status}</p>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Characters:</p>
                <output className={`m-2`}>{convertCard.character_limit_reamining}/{convertCard.character_limit}</output>
            </div>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Characters/convert:</p>
                <output className={`m-2`}>{convertCard.character_limit_per_req}</output>
            </div>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Convert/day:</p>
                <output className={`m-2`}>{convertCard.req_per_day_reamining?.req_reamining}/{convertCard.req_per_day}</output>
            </div>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Total Files:</p>
                <output className={`m-2`}>{convertCard.file_count}</output>
            </div>
            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Total Sizes(MB):</p>
                <output className={`m-2`}>{convertCard.size}</output>
            </div>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Last Active from:</p>
                <p className={`m-2`}>{new Date(convertCard.package_start?.split("T")[0]).toLocaleDateString('en-US',{day:"2-digit",month:"short",year:"2-digit"})}</p>
            </div>

            <div className={`d-flex justifyBetween ${dashST.convert_card_info}`}>
                <p className={`m-2`}>Expires in:</p>
                <p className={`m-2`}>{new Date(convertCard.package_expire?.split("T")[0]).toLocaleDateString('en-US',{day:"2-digit",month:"short",year:"2-digit"})}</p>
            </div>

            


        </div>
    );
};

export default ConvertCard;