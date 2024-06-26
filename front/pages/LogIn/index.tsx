import React, { useCallback, useEffect, useState } from 'react';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Form, Success, Error, Header, Input, Label, LinkContainer, Button } from '@pages/SignUp/styles';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Redirect } from 'react-router';

const LogIn = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post('/api/users/login', { email, password }, { withCredentials: true })
        .then(() => {
          mutate(); // OPTIMISTIC UI -> 내가 보내는 요청이 성공 할 것 이라고 예상하고 보내는 행위 (선동작 후 디비 점검) // 하고 싶으면 이 옵션은 true 로 바꿔주면 된다.
        })
        .catch((error) => {
          setLogInError(error.response?.data.statusCode === 401);
        });
    },
    [email, password],
  );

  if (data === undefined) {
    return <div>로딩중...</div>;
  }

  if (data) {
    return <Redirect to={'/workspace/sleact/channel/일반'} />;
  }

  // console.log(error, userData);
  // if (!error && userData) {
  //     console.log('로그인 됨', userData);
  //     return <Redirect to="/workspace/sleact/channel/일반"/>;
  // }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
