import React from "react";

const Layout = ({
  children,
  sidebar,
  main,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}) => {
  return (
    <div className="flex flex-1 gap-2">
      <aside>{sidebar}</aside>
      <section>{main || children}</section>
    </div>
  );
};

export default Layout;
