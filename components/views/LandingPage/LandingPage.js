import React from 'react'

function Button(props) {
  return <button className="mainbutton" style={{ margin: '85px 0 150px 550px' }} onClick={
    function (event) {
      event.preventDefault();
      props.onChangeMode();
    }
  }>
    {props.title}
  </button>
}




function LandingPage() {
  return (
    <div className="Home" >
      <div className="mainQ1">나에게 딱 맞는</div>
      <div className="mainQ2">전자기기를 찾고 있나요?</div>
      <div className="mainQ3">메모리, 그래픽... 최고 사양..? 그게 뭔데. 어떻게 하는 건데.</div>
      <div className="mainQ4">간단한 질의응답을 통해 나와 찰떡궁합인 기기를 만나보세요.</div>
      <div><Button title="네, 추천해주세요!" onChangeMode={function () {
        window.location.href = "/QuestionPage1"
      }}></Button></div>



    </div>
  )
}


export default LandingPage;