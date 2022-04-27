import React, { useState } from "react";
import UseEffectHook from "./Hooks/UseEffectHook";
// import Test from "./Test";

const App = () => {
  const [showComp, setshowComp] = useState(true);
  return (
    <div>
      {/* <Test /> */}

      {showComp ? <UseEffectHook /> : null}
      <button onClick={() => setshowComp(false)}>
        unmount useEffect Component
      </button>
    </div>
  );
};

export default App;
