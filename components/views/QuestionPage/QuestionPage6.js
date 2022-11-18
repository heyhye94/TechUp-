import React from 'react'


function Button(props) {
    return <button class="mainbutton" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        {props.title}
    </button>
}

function ToHome() {
    return <tohome>
        <a href="/QuestionPage1" className="tohome" style={{ padding: '30px 0 0 180px' }}>이전 단계</a>
    </tohome>
}


function RoundButton2(props) {
    return <button className="roundbutton3" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        {props.title}
    </button>
}


function QuestionPage6() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div className="Q6-01">저는 이게 제일 중요해요!</div>
            <div><RoundButton2 title="속도" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></RoundButton2></div>
            <div><RoundButton2 title="화질" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></RoundButton2></div>
            <div><RoundButton2 title="저장공간" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></RoundButton2></div>
            <div><RoundButton2 title="부드러운 움직임" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></RoundButton2></div>
            <div><RoundButton2 title="상관없어요" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></RoundButton2></div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/ResultPage1"
            }}></Button></div>
        </div>
    )
}

export default QuestionPage6