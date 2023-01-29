import { Main, Meta } from "../layout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Components() {
  const country = ["USA", "UK"];
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
    </Main>
  );
}
