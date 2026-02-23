"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardPanel } from "../dashboard-panel";
import { actionTasks } from "../../_lib/dashboard-data";

export function ActionItemsPanel() {
  const [checkedTasks, setCheckedTasks] = React.useState<Record<string, boolean>>({});

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
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
            {actionTasks.map((task) => (
              <Card
                key={task.id}
                variant="flat"
                className="rounded-none border-[var(--app-border)] bg-[var(--app-surface-raised)]"
              >
                <CardContent className="p-2">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      checked={checkedTasks[task.id] ?? false}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="mt-0.5 size-3.5 rounded-[2px] border-[var(--app-border-strong)]"
                    />
                    <div>
                      <p className="text-[10px] font-medium text-[var(--app-text)]">{task.title}</p>
                      <p className="mt-0.5 text-[9px] text-[var(--app-muted)]">{task.location}</p>
                      <p className="mt-1 text-[8px] tracking-wide text-[var(--app-muted)] uppercase">
                        {task.due}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
