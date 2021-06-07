import React, { useState } from "react";
import AuthNavigation from "../navigation/auth/AuthNavigation";
import TabNavigation from "../navigation/user/TabNavigation";
import { SafeAreaView } from "react-native";

export default () => {
  const [login, setLogin] = useState(false);

  return (
    login === false ? <AuthNavigation /> : <TabNavigation />
  );
};
