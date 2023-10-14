import { Header } from "@/src/Layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div className="mx-auto max-w-2xl px-2 min-h-screen">
      <Header />
      {props.children}
    </div>
  );
};
