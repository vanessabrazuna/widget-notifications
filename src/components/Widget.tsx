'use client'

import { ArrowRight, Check, Rocket, X } from 'lucide-react'
import { NotificationRoot } from './Notification/NotificationRoot'
import { NotificationIcon } from './Notification/NotificationIcon'
import { NotificationContent } from './Notification/NotificationContent'
import { NotificationActions } from './Notification/NotificationActions'
import { NotificationAction } from './Notification/NotificationAction'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div
        className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center 
        justify-between"
      >
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div
          className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm 
          text-zinc-500 dark:text-zinc-400"
        >
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <NotificationRoot>
            <NotificationIcon icon={Rocket} />
            <NotificationContent text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <NotificationActions>
              <NotificationAction onClick={() => {}} icon={X} />
              <NotificationAction
                onClick={() => {}}
                icon={Check}
                className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
              />
            </NotificationActions>
          </NotificationRoot>

          <NotificationRoot>
            <NotificationIcon icon={Rocket} />
            <NotificationContent text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <NotificationActions>
              <NotificationAction
                onClick={() => {}}
                icon={ArrowRight}
                className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 
                dark:hover:bg-emerald-600"
              />
            </NotificationActions>
          </NotificationRoot>
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div
          className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm 
          text-zinc-500 dark:text-zinc-400"
        >
          Antigas
        </div>
        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <NotificationRoot>
            <NotificationIcon icon={Rocket} />
            <NotificationContent
              text="Você recebeu um convite para fazer parte da empresa 
              Rocketseat."
            />
          </NotificationRoot>

          <NotificationRoot>
            <NotificationIcon icon={Rocket} />
            <NotificationContent
              text="Você recebeu um convite para fazer parte da empresa 
              Rocketseat."
            />
          </NotificationRoot>
        </div>
      </div>
    </div>
  )
}
