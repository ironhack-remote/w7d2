import React from "react";
import CoolButton from "./coolbutton/CoolButton";
import FormField from "./formfield/FormField";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. Please dont write password here"
        />
        <CoolButton isSmall isSuccess>
          Signup
        </CoolButton>
      </form>
      {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isWarning className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </div>
  );
};

export default App;
