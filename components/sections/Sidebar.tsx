import React, { useState } from "react";
import { Button, Dropdown, Input } from "../ui";
import { Lanuage } from "../../data/language";

const Sidebar = () => {
  const Tone = ["Convicing", "Casual", "Formal", "Funny"];
  const Language = ["English", "Spanisch"];

  const [selcted, setSelected] = useState({
    language: "English",
    tone: "Sad",
  });

  return (
    <aside className="lg:w-[35%] md:w-[40%] w-full bg-slate-300 sm:h-screen h-full p-3 flex flex-col gap-y-6">
      <div className="flex gap-x-2 items-center">
        <Dropdown
          options={Lanuage}
          selected={selcted.language}
          onChange={(val) => setSelected({ ...selcted, language: val })}
          label="Language"
        />

        <Dropdown
          options={Tone}
          selected={selcted.tone}
          onChange={(val) => setSelected({ ...selcted, tone: val })}
          label="tone"
        />
      </div>
      <div>
        <Dropdown
          options={Tone}
          selected={selcted.tone}
          onChange={(val) => setSelected({ ...selcted, tone: val })}
          label="Choose Use Case
"
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
          options={Tone}
          selected={selcted.tone}
          onChange={(val) => setSelected({ ...selcted, tone: val })}
          label="Select Language"
        />
        <Dropdown
          options={Tone}
          selected={selcted.tone}
          onChange={(val) => setSelected({ ...selcted, tone: val })}
          label="Tone"
        />
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
