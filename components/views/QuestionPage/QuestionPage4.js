import React from 'react'
import WebImg from '../../../IMG2/icon/web.svg'
import GameImg from '../../../IMG2/icon/game.svg'
import EditImg from '../../../IMG2/icon/edit.svg'
import VideoImg from '../../../IMG2/icon/video.svg'

function Button(props) {
    return <button class="mainbutton" style={{ margin: '80px 0 150px 580px' }} onClick={
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
        <a href="/QuestionPage3" className="tohome" style={{ padding: '30px 0 0 180px' }}>이전 단계</a>
    </tohome>
}

function RoundButton2(props) {
    return <button className="roundbutton3" onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }><div><img className="btnImg" src={props.image} /></div>
        {props.title}
    </button>
}


function QuestionPage4() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div className="Q4-01">제 취미는</div>
            <div><RoundButton2 title="웹서핑" image={WebImg} onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="게임" image={GameImg} onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="사진/동영상 편집" image={EditImg} onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div><RoundButton2 title="영상 감상" image={VideoImg} onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></RoundButton2></div>
            <div className="Q4-02">이예요.</div>
            <div><Button title="다음" onChangeMode={function () {
                window.location.href = "/QuestionPage6"
            }}></Button></div>
        </div>
    )
}

export default QuestionPage4