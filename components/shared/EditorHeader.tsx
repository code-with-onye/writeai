import clsx from "clsx";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import { IBold, IHeading, IItalic } from "../ui/Icons";

interface IEditorProps {
  editor: any;
}

const EditorHeader = (props: IEditorProps) => {
  // Buttoons Editor
  const items = [
    {
      title: "italic",
      action: () => props.editor?.chain().focus().toggleItalic().run(),
      isActive: props.editor?.isActive("italic"),
      disabled: !props.editor?.can().chain().focus().toggleItalic().run(),
      icon: <IItalic />,
    },
    {
      title: "bold",
      action: () => props.editor?.chain().focus().toggleBold().run(),
      isActive: props.editor?.isActive("bold"),
      disabled: !props.editor?.can().chain().focus().toggleBold().run(),
      icon: <IBold />,
    },
    {
      title: "heading",
      action: () =>
        props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: props.editor?.isActive("heading", { level: 1 }),
      icon: <IHeading />,
    },
  ];

  // Editor Buttton

  if (!props.editor) {
    return null;
  }

  return (
    <div className="flex gap-x-2">
      {items.map((item, i) => (
        <button
          onClick={item.action}
          disabled={item.disabled}
          className={clsx([
            item.isActive ? "is-active bg-black text-gray-200" : "",
            "p-2 rounded-full w-8 h-8 ",
          ])}
        >
          {/* {item.title} */}
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default EditorHeader;
