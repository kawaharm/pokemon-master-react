/// ContextProvider.js
// Initialize states, pass them as "values"
import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [showBattleScreen, setShowBattleScreen] = useState(false);
  const [removeHints, setRemoveHints] = useState([]);

  return (
    <Context.Provider
      value={{
        showBattleScreen,
        setShowBattleScreen,
        removeHints,
        setRemoveHints,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
