import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

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
    </section>
  );
};

export default HomePage;
