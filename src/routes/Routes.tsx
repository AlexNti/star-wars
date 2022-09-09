import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "src/components";

import { WikiList } from "src/features/wikiList";

import { NotFound404 } from "src/components";

const AppRoutes = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/wiki" element={<WikiList />} />
        <Route path="/" element={<Navigate to="/wiki" replace={true} />} />
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
