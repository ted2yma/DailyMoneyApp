import { Formctn, Inputfullwidth, Inputhalfwidth, InputhalfwidthRow, PanelTitle, SenditbuttonCtn } from "../Stylelist";
import styled from 'styled-components';
import React, { useState } from "react";
import Previewcard from "./components/Previewcard";
import { v4 } from 'uuid'

const Previewctn = styled.div`
    display: none;
    @media (min-width: 996px) {
        display: flex;
    }
`;

const Form = React.forwardRef((props, ref) => {

    const [title, setTiile] = useState('');
    function titleChange(e){
        setTiile(e.target.value);
    }

    const [price, setPrice] = useState('');
    function priceChange(e){
        setPrice(e.target.value);
    }

    let puretoday = new Date().toLocaleString('en-GB', {timeZone: 'Asia/Taipei'});
    let yyyy = puretoday.slice(6, 10);
    let mm = puretoday.slice(3, 5);
    let dd = puretoday.slice(0, 2);

    let today = yyyy + '-' + mm + '-' + dd;
    const [date, setDate] = useState(today);
    function dateChange(e){
        setDate(e.target.value);
    }

    let currenttime = puretoday.slice(12, 17);
    const [time, setTime] = useState(currenttime);
    function timeChange(e){
        setTime(e.target.value);
    }

    function newRecord(){
        if(title !== '' && price !== ''){
            props.poststatus.current = true;
            props.action(function(previous){
                return [
                    {
                        id: v4(),
                        title,
                        price,
                        date,
                        time
                    },
                    ...previous
                ]
            })
        }else{
            window.alert("標題跟金額不能空啊\n不然加個毛啊?");
            return
        }
    }

    function cleartitle(){
        setTiile('');
    }
    function clearprice(){
        setPrice('');
    }

    return (
        <Formctn ref={ref}>
            <Previewctn>
                <Previewcard title={title} price={price} date={date} time={time} />
            </Previewctn>
            <PanelTitle>
                <h2>新增消費</h2>
            </PanelTitle>
            <Inputfullwidth>
                <input type="text" maxLength={20} placeholder="消費名稱" value={title} onChange={titleChange} />
                <div className="clearbutton" onClick={cleartitle}><span>✕</span></div>
            </Inputfullwidth>
            <Inputfullwidth>
                <input type="number" min={1} placeholder="金額" value={price} onChange={priceChange} />
                <div className="clearbutton" onClick={clearprice}><span>✕</span></div>
            </Inputfullwidth>
            <InputhalfwidthRow>
                <Inputhalfwidth>
                    <input type='date' placeholder="日期" value={date} onChange={dateChange} />
                </Inputhalfwidth>
                <Inputhalfwidth>
                    <input type='time' placeholder="時間" value={time} onChange={timeChange} />
                </Inputhalfwidth>
            </InputhalfwidthRow>
            <SenditbuttonCtn onClick={newRecord}>記你一筆</SenditbuttonCtn>
        </Formctn>
    );
});

export default Form;