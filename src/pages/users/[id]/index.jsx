import { Header } from "@/src/components/Header";
import { UserComponent } from "@/src/components/User";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザーの投稿の取得
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();
  // ユーザーのコメントの取得
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments?id=${userData.id}`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const UsersId = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UsersId;
