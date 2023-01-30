import { Main, Meta } from "../layout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Card } from "../components/ui";
import { TemplateCard } from "../components/shared";

export default function Components() {
  const country = ["USA", "UK"];
  const items = [
    { label: "Home" },
    { label: "Settings" },
    { label: "General" },
    { label: "Home" },
    { label: "Settings" },
    { label: "General" },
  ];
  return (
    <Main
      meta={<Meta title="Ai creator" description="Bring your Ideas to life " />}
    >
      <div className="">
        <div className="flex ">
          <Input
            type="password"
            placeholder="Enter email"
            content="Enter Email"
          />
        </div>
      </div>
      <Button variant="fill" size="lg">
        Click
      </Button>
      {/* <Breadcrumb items={items} /> */}
      <div className="grid grid-cols-4 gap-x-2">
        <TemplateCard
          prompt="App notification"
          description="Write catchy app notification that drive trafic"
        />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </Main>
  );
}
