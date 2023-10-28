import React from "react";

interface SessionProps {
  children: React.ReactNode;
  loginStatus: boolean;
}

const SessionProvider: React.FC<SessionProps> = ({ children, loginStatus }) => {
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        isLoggedIn: loginStatus,
      });
    });
  };

  return <React.Fragment>{renderChildren()}</React.Fragment>;
};

export default SessionProvider;
