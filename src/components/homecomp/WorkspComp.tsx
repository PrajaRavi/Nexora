import type {workspaceCompT} from "../../../Types/Home"
export const WorkspaceComp = ({item, index}:workspaceCompT) => (
  <div
    key={item}
    className={`mb-2 rounded-lg px-3 py-2 text-xs ${
      index === 0
        ? "bg-violet-100 font-semibold text-violet-700"
        : "text-slate-500"
    }`}
  >
    {item}
  </div>
);