import React from 'react'



function ToHome() {
    return <tohome>
        <a href="/QuestionPage1" className="tohome" style={{ padding: '30px 0 0 180px' }}>다시 알아보기</a>
    </tohome>
}

function ResultPage2() {
    return (
        <div>
            <div>
                <ToHome></ToHome>
            </div>
            <div className="ResultQ3">뭐가 다를까요?</div>
            <div className="ResultQ4">테크업과 함께 쉽고 빠르게 알아보도록 해요.</div>
            <div class="product-box">제품명</div>
            <div class="product-box">제품명</div>
        </div>

    )
}


export default ResultPage2;