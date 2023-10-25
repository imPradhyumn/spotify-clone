import React from "react";

interface SessionProps {
  children: React.ReactNode;
}

const SessionProvider: React.FC<SessionProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default SessionProvider;
