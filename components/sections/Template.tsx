import { template } from "../../data";
import { TemplateCard } from "../shared";

export default function Template() {
  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 px-4">
      {template.data.map((data, i) => (
        <TemplateCard
          prompt={data.prompt}
          description={data.description}
          key={i}
        />
      ))}
    </div>
  );
}
