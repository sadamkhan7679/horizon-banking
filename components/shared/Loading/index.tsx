import React from "react";
import { Loader } from "lucide-react";

type LoadingComponentProps = {};

const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  return (
    <div
      className="
    w-screen h-screen opacity-50 flex bg-blue-25 items-center justify-center
    absolute top-0 left-0
    "
    >
      <div className="animate-spin-slow">
        <Loader size={64} strokeWidth={2.5} color="#175CD3" />
      </div>
    </div>
  );
};

export default LoadingComponent;
