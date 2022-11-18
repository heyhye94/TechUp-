import React from 'react'

function Button(props) {
    return <button class="mainbutton" style={{ margin: '50px 0px 150px 600px' }} onClick={
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
        <a href="/QuestionPage1" className="tohome" style={{ padding: '30px 0 0 180px' }}>다시 알아보기</a>
    </tohome>
}

function ResultPage1() {
    return (
        <div className="container1">
            <div>
                <ToHome></ToHome>
            </div>
            <div className="ResultQ1">딱 맞는 제품을 찾았어요!</div>
            <div className="ResultQ2">내 스타일에 맞는 제품은 무엇일까요?</div>
            <div class="product-box">제품명</div>
            <div class="product-box">제품명</div>
            <div><Button title="비교하기" onChangeMode={function () {
                window.location.href = "/ResultPage2"
            }}></Button></div>

        </div>

    )
}


export default ResultPage1;