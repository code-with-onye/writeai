import { Meta, Main } from "../../layout";
import { Template, TemplateSelection } from "../../components/sections";

export default function template() {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="w-full mb-3 px-4 py-2 sticky top-0 bg-white/10 z-10   backdrop-filter backdrop-blur-2xl bg-opacity-10">
        <TemplateSelection />
      </div>
      <Template />
    </Main>
  );
}
