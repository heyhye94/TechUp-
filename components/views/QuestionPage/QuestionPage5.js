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


function QuestionPage5() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div className="Q5-01">작업 용도는</div>
            <div><RoundButton2 title="그래픽 작업" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="문서 작업" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="사진/동영상 편집" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="음악 작업" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div className="Q5-02">이예요.</div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></Button></div>
        </div>
    )
}

export default QuestionPage5