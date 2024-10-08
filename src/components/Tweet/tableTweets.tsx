import React from "react";

interface TableTweets {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TableTweets: React.FC<TableTweets> = ({ label, active, onClick }) => {
  return (
    <div
      className={`p-4 cursor-pointer ${
        active ? "text-white border-b-4 border-blue" : "text-graycolor2"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default TableTweets;
