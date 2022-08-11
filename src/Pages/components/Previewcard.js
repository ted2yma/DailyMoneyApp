import { DelKey, EditKey, FunctionalKey, LivePreview, LivePreviewContent, LivePreviewCtn } from "../../Stylelist";

function Previewcard(props){
    const echoprice = (props) => {
        let pricetag = '';
        if(props.price === ''){
            return pricetag = '--';
        }else{
            if(props.price < 999){
                return pricetag = props.price;
            }else if(props.price < 9999){
                return pricetag = props.price.toString().slice(0,1) + '.' + props.price.toString().slice(1,2) + 'k';
            }else if(props.price < 99999){
                return pricetag = props.price.toString().slice(0,2) + 'k';
            }else if(props.price < 999999){
                return pricetag = props.price.toString().slice(0,3) + 'k';
            }else if(props.price < 9999999){
                return pricetag = props.price.toString().slice(0,1) + '.' + props.price.toString().slice(1,2) + 'M';
            }else if(props.price < 99999999){
                return pricetag = props.price.toString().slice(0,2) + 'M';
            }else if(props.price < 999999999){
                return pricetag = props.price.toString().slice(0,3) + 'M';
            }else if(props.price < 9999999999){
                return pricetag = props.price.toString().slice(0,1) + '.' + props.price.toString().slice(1,2) + 'B';
            }else{
                return pricetag = '∞';
            }
        }
    }

    const echotitle = (props) => {
        if(props.title === ''){
            let titletag = '你的下一筆消費是...';
            return titletag;
        }else{
            let titletag = props.title;
            return titletag;
        }
    }

    return(
        <LivePreviewCtn>
            <LivePreview>
                    <LivePreviewContent>
                        <h3>{echotitle(props)}</h3>
                        <div className="detail-ctn">
                            <div className="timestamp-ctn">
                                <span>{props.date}</span>
                                <br/>
                                <span>{props.time}</span>
                            </div>
                            <div className="pricetag-ctn">
                                <span>TWD$</span>
                                <span className="pricetag">
                                    {echoprice(props)}
                                </span>
                            </div>
                        </div>
                    </LivePreviewContent>
                    <FunctionalKey>
                        <EditKey>
                            <span>編輯</span>
                        </EditKey>
                        <DelKey>
                            <span>刪除</span>
                        </DelKey>
                    </FunctionalKey>
            </LivePreview>
        </LivePreviewCtn>
    );
}

export default Previewcard;