import Head from "next/head";
import { Header } from "@/src/components/Header";
import { Users as PostUsers } from "@/src/components/Users";

const Users = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <PostUsers />
    </>
  );
};

export default Users;
