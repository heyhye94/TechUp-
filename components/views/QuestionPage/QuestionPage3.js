import React from 'react'
import HobbyImg from '../../../IMG2/icon/hobby.svg'
import WorkImg from '../../../IMG2/icon/work.svg'

function Button(props) {
    return <button style={{ margin: '0px 0px 150px 600px' }} class="mainbutton" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        {props.title}
    </button>
}

function RoundButton(props) {
    return <button className="roundbutton" style={{ marginTop: '30px' }} onClick={
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
        <a href="/QuestionPage2" className="tohome" style={{ padding: '30px 0 0 180px' }}>이전 단계</a>
    </tohome>
}


function QuestionPage3() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div><RoundButton title="취미" image={HobbyImg} onChangeMode={function () {
                window.location.href = "/QuestionPage4"
            }}></RoundButton></div>
            <div><RoundButton title="작업" image={WorkImg} onChangeMode={function () {
                window.location.href = "/QuestionPage5"
            }}></RoundButton></div>
            <div className="Q3-01">용으로 쓸 거예요.</div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/QuestionPage4"
            }}></Button></div>

        </div>

    )
}

export default QuestionPage3