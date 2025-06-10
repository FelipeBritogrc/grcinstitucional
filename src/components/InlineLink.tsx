
import React from "react";

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const InlineLink: React.FC<InlineLinkProps> = ({ href, children, className = "" }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[#0d7c3d] font-semibold hover:text-[#282e76] hover:underline transition-colors cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default InlineLink;
