// import AuthLayout from "@/components/Layouts/AuthLayout";
// import SEO from "@/components/SEO";
// import { Routes } from "@/utils/routes";
// import { NextPageWithLayout } from "../../../types/global";
// import ClientLoginContainer from "@/container/auth/LoginContainer";
// import LoginContainer from "@/container/auth/LoginContainer";

// const LoginPage: NextPageWithLayout = () => {
//   return (
//     <>
//       <SEO prefix="Login" path={Routes.login} />
//       <LoginContainer />
//     </>
//   );
// };

// LoginPage.getLayout = function getLayout(page: React.ReactElement) {
//   return <AuthLayout>{page}</AuthLayout>;
// };

// export default LoginPage;

import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
