import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`;

export const MentionsTextarea = styled(MentionsInput)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  //height: auto; /* autosize를 위해 height를 auto로 설정 */
  //overflow: hidden; /* textarea의 크기를 조절할 때 스크롤이 발생하지 않도록 */
  //resize: none; /* 사용자가 크기를 조절하지 못하도록 */
  //border: none;
  //outline: none;
  //line-height: 22px;
  //border-radius: 4px;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;

export const Toolbox = styled.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;
