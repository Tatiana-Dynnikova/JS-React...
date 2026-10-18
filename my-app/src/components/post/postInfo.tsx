import styled from "styled-components";
import { type Props } from "./post";

export const PostInfo = ({ postData }: { postData: Props }) => {
  return (
    <DivPostInfo>
      <DatePost>{postData.date}</DatePost>
      <TitlePost>{postData.title}</TitlePost>
      <TextPost>{postData.text}</TextPost>
      <p>{postData.author}</p>
    </DivPostInfo>
  );
};

const DivPostInfo = styled.div`
  display: flex;
`;
const DatePost = styled.p`
  color: gray;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TitlePost = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const TextPost = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;
