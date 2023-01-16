import { template } from "../../data";
import { TemplateCard } from "../shared";

export default function Template() {
  return (
    <div className="w-full mt-4">
      <h3 className="text-lg font-bold">{template.heading}</h3>
      <div className="flex overflow-scroll snap-x gap-x-2 mt-2">
        {template.data.map((data, i) => (
          <TemplateCard
            prompt={data.prompt}
            description={data.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
