import React from "react";
import HeaderBox from "@/components/modules/Dashboard/HeaderBox";
import TotalBalanceBox from "@/components/modules/Dashboard/TotalBalanceBox";
import RightSidebar from "@/components/modules/Dashboard/RigthSidebar";
import { testUser } from "@/constants/mockData";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const loggedInUser = { firstName: "John", lastName: "Doe" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            subtext="Here's what's happening with your account."
            user={loggedInUser.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1000}
          />
        </header>
      </div>
      <RightSidebar
        user={testUser}
        transactions={[]}
        banks={[]}
        // transactions={account?.transactions}
        // banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default HomePage;
