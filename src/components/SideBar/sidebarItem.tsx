import { useNavigate } from "react-router-dom";
import React from 'react';

interface Props {
  heading?: string;
  children?: JSX.Element | JSX.Element[];
  href: string;
  onClick?: () => void;
}

function SidebarItem({ heading, children, href, onClick }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else {
      navigate(href);
    }
  };

  return (
    <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick}>
      <div>{children}</div>
      <p className="hidden lg:block text-white text-[20px]">{heading}</p>
    </div>
  );
}

export default SidebarItem;
