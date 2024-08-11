import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboards = () => {
  return (
    <div className="flex">
      <section className="w-1/5 bg-sky-300 h-screen">
        <Dashboards />
      </section>
      <section className="w-4/5 h-screen">
        <Outlet />
      </section>
    </div>
  );
};
