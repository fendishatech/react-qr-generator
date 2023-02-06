import React from "react";
import InputForm from "./assets/components/InputForm";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-36">
      <div className="container mx-auto max-w-4xl bg-white rounded-sm shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <h1>qrCode</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
