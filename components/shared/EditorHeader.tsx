import clsx from "clsx";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import { IBold, IHeading, IItalic, IOrdered, ISubHeading } from "../ui/Icons";

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
    {
      title: "subHeading",
      action: () =>
        props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: props.editor?.isActive("heading", { level: 3 }),
      icon: <ISubHeading />,
    },
    {
      title: "orderedlist",
      action: () => props.editor?.chain().focus().toggleOrderedList().run(),
      isActive: props.editor?.isActive("orderedList"),
      icon: <IOrdered />,
    },
  ];

  // Editor Buttton

  if (!props.editor) {
    return null;
  }

  return (
    <div className="flex gap-x-2 sticky top-0 bg-white/10 z-10   backdrop-filter backdrop-blur-2xl bg-opacity-10">
      {items.map((item, i) => (
        <button
          key={i}
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
