import styled from "styled-components";
import { PostAction } from "./postAction";
import { PostInfo } from "./postInfo";

export type Props = {
  id: number;
  src?: string;
  text: string;
  date: string;
  title: string;
  author: number;
};

export const post: Props[] = [
  {
    id: 1,
    src: "./assets/kosmonavt_1.jpg",
    date: "April 20, 2021",
    title: "A secret underground cave",
    author: 1,
    text: "NASA is hunting for a secret underground cave on the moonAstrophotographer captures 110 galaxies",
  },
  {
    id: 2,
    src: "./assets/kosmonavt_2.jpg",
    date: "April 20, 2021",
    title: "21 satellites",
    author: 2,
    text: "SpaceX launches 21 satellites to orbit for the US military after 5-day delay",
  },
  {
    id: 3,
    src: "./assets/kosmonavt_3.jpg",
    date: "03.05.2025",
    title: "Space Telescope",
    author: 3,
    text: "James Webb Space Telescope helps detect the most distant Fast Radio Burst ever seen — and scientists are surprised by its source",
  },
];

const PostCard = ({ post }: { post: Props }) => {
  return (
    <>
      <DivPostCard>
        <PostInfo postData={post} />
        <img src={post.src} alt={post.title} />
      </DivPostCard>
      <PostAction />
    </>
  );
};

export const Posts = () => {
  return (
    <div>
      {post.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

// const DivPosts = styled.div`
//   background-color: rgb(243, 243, 243);
//   display: grid;
//   padding: 15px 5px;
// `;

const DivPostCard = styled.div`
  border-bottom: 1px solid rgb(243, 243, 243);
`;
