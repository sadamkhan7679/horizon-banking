import React from "react";
import HeaderBox from "@/components/modules/Dashboard/HeaderBox";
import TotalBalanceBox from "@/components/modules/Dashboard/TotalBalanceBox";
import RightSidebar from "@/components/modules/Dashboard/RigthSidebar";
import { getLoggedInUser } from "@/lib/auth/auth.actions";
import { getAccount, getAccounts } from "@/lib/banks/banks.actions";
import { SearchParamProps } from "@/types";
import RecentTransactions from "@/components/modules/Dashboard/RecentTransactions";
import LoadingComponent from "@/components/shared/Loading";

interface HomePageProps {}

const HomePage = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedInUser = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedInUser.$id });

  // console.log("accounts", accounts);
  //
  // console.log("loggedInUser", loggedInUser);

  if (!loggedInUser || !accounts) {
    return null;
  }

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  // console.log("account", account);

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
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default HomePage;
