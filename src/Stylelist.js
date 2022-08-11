import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

export const Formctn = styled.div`
    width: 100%;
    position: absolute;
    order: 2;
    left: 0;
    bottom: 0;
    background-color: #212529;
    padding: 20px 0 15px 0;
    @media (min-width: 996px) {
        width: 50%;
        order: 1;
        position: fixed;
        height: 100vh;
    }
    @media (min-width: 1320px) {
        padding-left: 15%;
    }
`;

export const PanelTitle = styled.div`
    color: white;
    width: 90%;
    margin: 10px auto 20px auto;
    padding: 10px 8px 0 8px;
    h2{
        margin: 0;
    }
`;

export const Inputfullwidth = styled.div`
    width: calc(90% - 16px);
    margin: 16px auto;
    padding: 0;
    background: #fff;
    display: flex;
    input{
        width: calc(100% - 40px);
        border: none;
        border-radius: 0;
        height: 40px;
        padding: 5px 10px;
        font-size: 1rem;
    }
    .clearbutton{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #fff;
        :active{
            transform: translate(0,0);
            background-color: #c0c0c0;
            transition: all .1s;
        }
    }
`;

export const InputhalfwidthRow = styled.div`
    width: 90%;
    margin: 16px auto;
    display: flex;
    flex-wrap: wrap;
`;

export const Inputhalfwidth = styled.div`
    width: 50%;
    padding: 0 8px;
    input{
        width: 100%;
        border: none;
        border-radius: 0;
        height: 40px;
        padding: 5px 10px;
        font-size: 1rem;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
`;

export const SenditbuttonCtn = styled.div`
    width: calc(90% - 16px);
    height: 60px;
    margin: 24px auto;
    color: #fff;
    font-weight: 500;
    background-color: #39e586;
    border-top: none;
    border-right: none;
    border-bottom: 8px solid #279e5c;
    border-left: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :active{
        transform: translate(0,0);
        border-bottom: 0px solid #279e5c;
        background-color: #279e5c;
        transition: all .1s;
    }
`;

export const Listctn = styled.div`
    width: 100%;
    order: 1;
    height: ${(props) => (`calc(100vh - ${props.height}px)`)};
    position: absolute;
    overflow-y: scroll;
    padding-top: 10px;
    background: linear-gradient(45deg,#d1aad7,#c88bc4 25%,#7b8fdd 50%,#86bff2 74.87%,#bbdef2 99.88%);
    @media (min-width: 996px) {
        position: static;
        width: 50%;
        order: 2;
        height: 100vh;
        overflow: auto;
        margin-left: 50%;
    }
    @media (min-width: 1320px) {
        padding-right: 15%;
    }
`;

export const LivePreviewCtn = styled.div`
    background-color: white;
    width: calc(90% - 16px);
    margin: 10px auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px black;
`;

export const LivePreview = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const LivePreviewContent = styled.div`
    width: calc(100% - 80px);
    padding: 20px;
    h3{
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 300;

    }
    .detail-ctn{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        padding-top: 10px;
        border-top: 1px solid #000;
    }
    .timestamp-ctn{
        order: 1;
    }
    .pricetag-ctn{
        order: 2;
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
    }
    .pricetag{
        font-size: 2rem;
        font-weight: 300;
        padding-left: 5px;
        line-height: 1.7rem;
        @media (min-width: 992px) {
            font-size: 2.5rem;
            line-height: 2.2rem;
        }
    }
`;

export const FunctionalKey = styled.div`
    margin-left: auto;
    color: white;
`;

export const EditKey = styled.div`
    width: 80px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #007bff;
    cursor: pointer;
    :active{
        background: #004482;
        transition: all .1s;
    }
`;

export const DelKey = styled.div`
    width: 80px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dc3545;
    cursor: pointer;
    :active{
        background: #892231;
        transition: all .1s;
    }
`;