import type {comp1T} from "../../../Types/Home"
export default function Comp1({initials,index}:comp1T){
  return(
<div
                key={initials}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-semibold ${
                  index === 0
                    ? "bg-violet-200 text-violet-700"
                    : index === 1
                    ? "bg-blue-200 text-blue-700"
                    : "bg-amber-200 text-amber-700"
                }`}
              >
                {initials}
              </div>
  )
}
