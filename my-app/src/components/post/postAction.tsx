import styled from "styled-components";

export const PostAction = () => {
  return (
    <>
      <DivPostAction>
        <div>
          <Img src="./assets/like.png" alt='like' />
          <Img src="./assets/dislike.png" alt='dislike' />
        </div>
        <div>
          <Img src="./assets/navigation.png" alt='navigation' />
          <Img src="./assets/marker.png" alt='marker' />
        </div>
      </DivPostAction>
    </>
  );
};

const Img = styled.img`
  width: 15px;
  height: 15px;
`;
const DivPostAction = styled.div`
  display: flex;
  justify-content: space-between;
`;
