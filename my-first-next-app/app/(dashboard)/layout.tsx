import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-3xl">Dashboard Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
