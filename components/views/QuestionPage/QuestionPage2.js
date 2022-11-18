import React from 'react'


function Button(props) {
    return <button class="mainbutton" style={{ margin: '30px 0 150px 600px' }} onClick={
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
    return <button className="roundbutton2" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        {props.title}
    </button>
}




function QuestionPage2() {
    return (
        <div className="effect1">
            <div>
                <ToHome></ToHome>
            </div>
            <div className="Q2-01">가격대는</div>
            <div className="radius1"><RoundButton2 title="70~80" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius2"><RoundButton2 title="90~100" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius3"><RoundButton2 title="110~120" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius4"><RoundButton2 title="130~140" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius5"><RoundButton2 title="150~180" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius6"><RoundButton2 title="150~180" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>
            <div className="radius7"><RoundButton2 title="200~" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></RoundButton2></div>

            <div className="Q2-02">에 알아보고 있어요.</div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/QuestionPage3"
            }}></Button></div>

        </div>
    )
}

export default QuestionPage2