"use client";

import * as React from "react";
import { Clock3Icon, Trash2Icon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardPanel } from "../dashboard-panel";
import { actionTasks } from "../../_lib/dashboard-data";

export function ActionItemsPanel() {
  const [checkedTasks, setCheckedTasks] = React.useState<Record<string, boolean>>({});
  const [items, setItems] = React.useState(actionTasks);

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const deleteTask = (taskId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== taskId));
    setCheckedTasks((prev) => {
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
  };

  return (
    <DashboardPanel title="Action Items">
      <Tabs defaultValue="active" className="gap-1">
        <TabsList
          variant="line"
          className="grid h-10 w-full grid-cols-3 items-end gap-0.5 rounded-none border-b border-[var(--app-border)] bg-transparent p-0"
        >
          <TabsTrigger
            value="active"
            className="-mb-px h-9 rounded-t-[10px] border border-[var(--app-border)] border-b-0 bg-[var(--app-surface)] px-3 text-[12px] font-medium text-[var(--app-text)] data-active:bg-[var(--app-surface-raised)] data-active:font-semibold"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="-mb-px h-9 rounded-t-[10px] border border-[var(--app-border)] border-b-0 bg-[var(--app-surface)] px-3 text-[12px] font-medium text-[var(--app-muted)] data-active:bg-[var(--app-surface-raised)] data-active:text-[var(--app-text)] data-active:font-semibold"
          >
            Past
          </TabsTrigger>
          <TabsTrigger
            value="snoozed"
            className="-mb-px h-9 rounded-t-[10px] border border-[var(--app-border)] border-b-0 bg-[var(--app-surface)] px-3 text-[12px] font-medium text-[var(--app-muted)] data-active:bg-[var(--app-surface-raised)] data-active:text-[var(--app-text)] data-active:font-semibold"
          >
            Snoozed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="pr-1">
          <div className="space-y-1.5">
            {items.map((task) => (
              <Card
                key={task.id}
                variant="flat"
                className="rounded-none border-[var(--app-border)] bg-[var(--app-surface-raised)]"
              >
                <CardContent className="p-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <Checkbox
                        checked={checkedTasks[task.id] ?? false}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-0.5 size-3.5 rounded-[2px] border-[var(--app-border-strong)]"
                      />
                      <div>
                        <p className="text-[10px] font-medium text-[var(--app-text)]">{task.title}</p>
                        <p className="mt-0.5 text-[9px] text-[var(--app-muted)]">{task.location}</p>
                        <div className="mt-1 inline-flex h-5 items-center rounded-[4px] border border-[#d8b3ac] bg-[#f8e8e4] px-2 text-[8px] font-semibold tracking-[0.04em] text-[#b35f4f] uppercase">
                          {task.due.replace("Due ", "Due ")}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        size="icon-xs"
                        variant="ghost"
                        className="size-6 text-[#d2796d] hover:bg-[#f7dfda] hover:text-[#bd5d51]"
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Delete ${task.title}`}
                      >
                        <Trash2Icon className="size-3.5" />
                      </Button>
                      <Button
                        size="icon-xs"
                        variant="ghost"
                        className="size-6 text-[#7ba6e9] hover:bg-[#e4eefc] hover:text-[#5d8fdf]"
                        aria-label={`Snooze ${task.title}`}
                      >
                        <Clock3Icon className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {items.length === 0 ? (
              <div className="rounded-[6px] border border-[var(--app-border)] bg-[var(--app-surface-raised)] p-4 text-center text-[10px] text-[var(--app-muted)]">
                No active items
              </div>
            ) : null}
          </div>
        </TabsContent>

        <TabsContent value="past" className="py-4 text-center text-[10px] text-[var(--app-muted)]">
          No past items
        </TabsContent>
        <TabsContent value="snoozed" className="py-4 text-center text-[10px] text-[var(--app-muted)]">
          No snoozed items
        </TabsContent>
      </Tabs>
    </DashboardPanel>
  );
}
