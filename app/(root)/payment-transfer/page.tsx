import React from "react";
import { getLoggedInUser } from "@/lib/auth/auth.actions";
import { getAccounts } from "@/lib/banks/banks.actions";
import HeaderBox from "@/components/modules/Dashboard/HeaderBox";
import PaymentTransferForm from "@/components/modules/PaymentTransfer/PaymentTransferForm";

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
