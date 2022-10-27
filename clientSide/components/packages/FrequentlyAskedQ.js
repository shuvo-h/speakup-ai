import React, { useState } from 'react';
import packageST from "../../../styles/package.module.css";
import { MinusIcon, PlusIcon } from '../../utils/Icons/IconRightMark';

const FAQdata = [
    {
        Q: "How to get started?",
        A: "You can use our free plan with 100 converts per week by registering, For full access to our features and voices buy our paid basic, premium and business plans respectively.You can use our free plan with 100 converts per week by registering, For full access to our features and voices buy our paid basic, premium and business plans respectively.You can use our free plan with 100 converts per week by registering, For full access to our features and voices buy our paid basic, premium and business plans respectively.You can use our free plan with 100 converts per week by registering, For full access to our features and voices buy our paid basic, premium and business plans respectively."
    },
    {
        Q: "Will my subscription auto-renew?",
        A: "No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually.No. At this moment you need to re-activate your subscription every month manually."
    },
]


const FrequentlyAskedQ = () => {
    const [expandAccordian,setActiveAccordian] = useState("");

    return (
        <div className={`${packageST.faq_accordian_wrapper}`}>
            <div>
                <h2 style={{textTransform:"capitalize"}} className='text-center'>frequently asked questions (FAQ) </h2>
            </div>
            <div>
                {
                    FAQdata.map(faq=><div className={`${packageST.faq_accordian}`} onClick={()=>{setActiveAccordian(faq.Q===expandAccordian?null:faq.Q)}} key={faq.Q}>
                        <div className={`d-flex alignCenter justifyBetween ${packageST.faq_question}`}>
                            <h4 className={`${"m-0"}`}>{faq.Q}</h4>
                            <div style={{borderRadius:"50%", display:"flex"}}>
                                {faq.Q === expandAccordian ? <MinusIcon></MinusIcon> : <PlusIcon></PlusIcon>}
                            </div>
                        </div>
                        <p className={`p-0 m-0 ${faq.Q === expandAccordian ? packageST.faq_answer_open :packageST.faq_answer_close}`}>{faq.A}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FrequentlyAskedQ;