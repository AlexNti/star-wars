import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "src/components";

import { Wiki } from "src/features/wiki";
import { WikiPage } from "src/features/wiki/components";

import { Profile } from "src/features/profile";

import { NotFound404 } from "src/components";

const AppRoutes = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/wiki" element={<Wiki />}>
          <Route path=":itemId" element={<WikiPage />} />
          <Route path=":itemId/:profileId" element={<Profile />} />

          {/* Initialize the router to navigate to people screeen by default */}
          <Route index element={<Navigate to="people" />} />

          {/* <Route path="profile/:id" element={<div>Here is profile</div>} /> */}
        </Route>

        <Route
          path="/"
          element={<Navigate to="/wiki/people" replace={true} />}
        />
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
