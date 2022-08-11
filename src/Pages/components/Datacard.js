import { DelKey, EditKey, FunctionalKey, LivePreview, LivePreviewContent, LivePreviewCtn } from "../../Stylelist";
import styled from 'styled-components'

const Datacardctn = styled.div`
    padding: 10px 0;
`;

function Datacard({id, title, price, date, time, delact, poststatus}){
    function del_action(){
        poststatus.current = true;
        delact(function(self){
            console.log(self);
            return self.filter(item => item.id !== id);
        })
    }

    let listprice = '';
    if(price < 999){
        listprice = price;
    }else if(price < 9999){
        listprice = price.toString().slice(0,1) + '.' + price.toString().slice(1,2) + 'k';
    }else if(price < 99999){
        listprice = price.toString().slice(0,2) + 'k';
    }else if(price < 999999){
        listprice = price.toString().slice(0,3) + 'k';
    }else if(price < 9999999){
        listprice = price.toString().slice(0,1) + '.' + price.toString().slice(1,2) + 'M';
    }else if(price < 99999999){
        listprice = price.toString().slice(0,2) + 'M';
    }else if(price < 999999999){
        listprice = price.toString().slice(0,3) + 'M';
    }else if(price < 9999999999){
        listprice = price.toString().slice(0,1) + '.' + price.toString().slice(1,2) + 'B';
    }else{
        listprice = '∞';
    }

    return(
        <Datacardctn>
            <LivePreviewCtn>
                <LivePreview>
                        <LivePreviewContent>
                            <h3>{title}</h3>
                            <div className="detail-ctn">
                                <div className="timestamp-ctn">
                                    <span>{date}</span>
                                    <br/>
                                    <span>{time}</span>
                                </div>
                                <div className="pricetag-ctn">
                                    <span>TWD$</span>
                                    <span className="pricetag">{listprice}</span>
                                </div>
                            </div>
                        </LivePreviewContent>
                        <FunctionalKey>
                            <EditKey>
                                <span>編輯</span>
                            </EditKey>
                            <DelKey onClick={del_action}>
                                <span>刪除</span>
                            </DelKey>
                        </FunctionalKey>
                </LivePreview>
            </LivePreviewCtn>
        </Datacardctn>
    );
}

export default Datacard;