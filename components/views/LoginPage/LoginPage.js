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



function LoginPage() {
  return (
    <div className="Loginbg">
      <div>ID</div>
      <div>비밀번호</div>
      <div><Button title="가입하기" onChangeMode={function () {
        window.location.href = "/RegisterPage"
      }}></Button></div>

    </div>

  )
}


export default LoginPage;