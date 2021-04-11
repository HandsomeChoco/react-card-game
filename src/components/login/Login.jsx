import React from 'react';
import './login.css';

const idPlaceHolder = '아이디';
const pwPlaceHolder = '비밀번호';

const Login = ({ id, password, onSubmut, onChangeID, onChangePw }) => {
  return (
    <form className="container v-flex login" onSubmit={onSubmut}>
      <h1 className="login-h1">로그인</h1>
      <div className="v-flex">
        <input
          className="input-credential"
          type="text"
          value={id}
          placeholder={idPlaceHolder}
          onChange={onChangeID}
        />
        <input
          className="input-credential"
          type="text"
          value={password}
          placeholder={pwPlaceHolder}
          onChange={onChangePw}
        />
      </div>

      <div>
        <button className="submit-btn">전송</button>
      </div>
    </form>
  );
};

export default React.memo(Login);
