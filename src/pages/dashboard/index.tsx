// react imports
import { FC } from "react";

import Table from "@/components/common/Table";
import { User } from "@/types/apps/user";

interface DashboardPageProps {
  data: User[];
}

const DashboardPage: FC<DashboardPageProps> = ({ data }) => {
  const columns = ["name", "username", "email", "phone", "website"];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="mt-10 mb-10 text-center">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">User List</h1>
        </div>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table rows={data} columns={columns} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const updatedUsers = users.map((user) => ({
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
  }));

  return {
    props: {
      data: updatedUsers,
    },
  };
}
