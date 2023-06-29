import { Rocket } from "lucide-react";
import { Button } from '@/components/Button'

export function OldSection() {
  return (
    <div>
      <div
        className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm 
      text-zinc-500 dark:text-zinc-400"
      >
        Antigas
      </div>
      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-3" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
              Você recebeu um convite para fazer parte da empresa Rocketseat.
            </p>
            <div className="text-xxs text-zinc-400 flex items-center gap-1">
              <span>Convite</span>
              <span>Há 3 min</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-3" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
              Você recebeu um convite para fazer parte da empresa Rocketseat.
            </p>
            <div className="text-xxs text-zinc-400 flex items-center gap-1">
              <span>Convite</span>
              <span>Há 3 min</span>
            </div>
          </div>

          <Button />
        </div>
      </div>
    </div>
  );
}
