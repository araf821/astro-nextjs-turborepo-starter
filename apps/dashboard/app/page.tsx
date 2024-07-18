"use client";

import { Button } from "@repo/ui/src/components/ui/button";

const Home = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <Button onClick={() => alert("clicked")}>Click Me</Button>
      <p className="text-2xl bg-white rounded-xl p-20">gdsfgello</p>
    </div>
  );
};

export default Home;
