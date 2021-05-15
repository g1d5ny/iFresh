import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

const ProductDetail = () => {
  const [result, setResult] = useState('');

  const signInWithKakao = async() => {
    const token = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async () => {
    const profile = await getKakaoProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <Container>
      <ButtonWrapper>
        <TouchableOpacity
          style={{
            backgroundColor: '#FEE500',
            borderRadius: 40,
            borderWidth: 1,
            height: 100,
          }}
          onPress={() => signInWithKakao()}
        />
        <Text>{result}</Text>
        <View style={{marginTop: 12}} />
        <TouchableOpacity
          style={{
            backgroundColor: '#FEE500',
            borderRadius: 40,
            borderWidth: 1,
            height: 100,
          }}
          // imgLeftSrc={IC_MASK}
          onPress={() => getProfile()}
        >
          <Text>GetProfile</Text>
        </TouchableOpacity>
        <View style={{marginTop: 12}} />
        <TouchableOpacity
          style={{
            backgroundColor: '#FEE500',
            borderRadius: 40,
            borderWidth: 1,
            height: 100,
          }}
          // imgLeftSrc={IC_MASK}
          onPress={() => unlinkKakao()}
        />
        <View style={{marginTop: 12}} />
        <TouchableOpacity
          style={{
            backgroundColor: '#FEE500',
            borderRadius: 40,
            borderWidth: 1,
            height: 100,
          }}
          // imgLeftSrc={IC_MASK}
          onPress={() => signOutWithKakao()}
        />
        <View style={{marginTop: 40}} />
      </ButtonWrapper>
    </Container>
  );
}

export { ProductDetail };
