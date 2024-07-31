import { NextPage } from "next";

interface Props {
  title: string;
  RenderComponent: JSX.Element;
}

const Col: NextPage<Props> = ({ title, RenderComponent }) => (
  <div className="flex flex-col bg-[#081c15] p-4 shadow rounded-lg">
    <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
    <span className="space-y-2">{RenderComponent}</span>
  </div>
);

export default Col;
