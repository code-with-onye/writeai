import React from "react";
import { Button, Dropdown, Input } from "../ui";

const Sidebar = () => {
  const Tone = ["Convicing", "casual"];
  const Language = ["English", "Spanisch"];
  return (
    <aside className="lg:w-[30%] md:w-[40%] w-full bg-slate-300 sm:h-screen h-full p-3 flex flex-col gap-y-6">
      <div className="flex gap-x-2 items-center">
        <Dropdown
          contentData={Language}
          content="Select Language"
          className="w-32"
        />
        <Dropdown contentData={Tone} content="Select Tone" className="w-32" />
      </div>
      <div>
        <Dropdown
          contentData={Tone}
          content="Choose use case"
          className="w-[20.5rem]"
        />
      </div>
      <div>
        <Input
          placeholder="Ai writing assistance"
          content="primary keyword"
          type="text"
        />
        <span className="text-xs font-semibold tracking-wide">
          Generate ideas and content structure for articles Click here to get
          enhanced keywords suggestions.
        </span>
      </div>
      <div className="flex gap-x-2 items-center">
        <Dropdown
          contentData={Language}
          content="Select Language"
          className="w-32"
        />
        <Dropdown contentData={Tone} content="Select Tone" className="w-32" />
      </div>
      <span className="text-xs font-semibold tracking-wide">
        Please review and comply with Facebook ad terms, Google ad terms,
        LinkedIn ad terms.
      </span>
      <Button variant="fill" size="lg">
        Generate Your Idea
      </Button>
    </aside>
  );
};

export default Sidebar;
