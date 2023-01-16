import { Meta, Main } from "../../layout";
import { Form, Editor, Template } from "../../components/sections";
import History from "../../components/sections/History";
import Favorite from "../../components/sections/Favorite";

export default function dashboard() {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Template />
      <div className="flex items-start w-full flex-col sm:flex-row  gap-x-24 mt-4">
        <History />
        <Favorite />
      </div>
    </Main>
  );
}
