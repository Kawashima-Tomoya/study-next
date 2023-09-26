import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className=" py-3 text-center border-b border-b-gray-500 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className=" w-20 inline-block py-1 px-3 m-1 text-xl hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};

// .anchor {
//   width: 80px;
//   display: inline-block;
//   padding: 4px 12px;
//   margin: 4px;

//   border-radius: var(--border-radius);
//   background: rgba(var(--card-rgb), 0);
//   border: 1px solid rgba(var(--card-border-rgb), 0);
//   transition: background 200ms, border 200ms;
// }
