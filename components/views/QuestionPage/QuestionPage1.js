// global background로는 색만 설정, 이미지 페이지마다 따로 넣기(background로)

import React from 'react'
import LaptopImg from '../../../IMG2/icon/laptop.svg';
import CameraImg from '../../../IMG2/icon/camera.svg';




function Button(props) {
    return <button className="mainbutton" style={{ margin: '85px 0 150px 600px' }} onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        {props.title}
    </button>
}


function RoundButton(props) {
    return <button className="roundbutton" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }><div><img className="LaptopImg" src={props.image} /></div>
        {props.title}
    </button>
}

function ToHome() {
    return <tohome>
        <a href="/" className="tohome" style={{ padding: '30px 0 0 190px' }}>홈으로</a>
    </tohome>
}




function QuestionPage1() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div className="Q1-01">저는</div>

            <div><RoundButton title="노트북" image={LaptopImg} onChangeMode={function () {
                window.location.href = "/QuestionPage2"
            }}></RoundButton></div>
            <div><RoundButton title="카메라" image={CameraImg} onChangeMode={function () {
                window.location.href = "/"
            }}></RoundButton></div>

            <div className="Q1-02">을/를 알아보고 있어요.</div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/QuestionPage2"
            }}></Button></div>


        </div>
    )
}

export default QuestionPage1