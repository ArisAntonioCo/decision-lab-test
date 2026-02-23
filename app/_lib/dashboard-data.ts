export type DashboardNavItem = {
  key: string;
  label: string;
};

export type ActionTask = {
  id: string;
  title: string;
  location: string;
  due: string;
};

export const dashboardNavItems: DashboardNavItem[] = [
  { key: "forecast", label: "Forecast" },
  { key: "assistant", label: "Assistant" },
  { key: "buildings", label: "Buildings" },
  { key: "units", label: "Units" },
  { key: "bank-feed", label: "Bank Feed" },
  { key: "capex", label: "CapEx" },
  { key: "opex", label: "OpEx" },
  { key: "mortgages", label: "Mortgages" },
  { key: "reports", label: "Reports" },
  { key: "settings", label: "Settings" },
];

export const actionTasks: ActionTask[] = [
  {
    id: "task-1",
    title: "Renew Desjardins insurance for Canal House",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
  {
    id: "task-2",
    title: "Send rent reminder for Canal House unit 903",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
  {
    id: "task-3",
    title: "Verify municipal tax installment before July deadline",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
  {
    id: "task-4",
    title: "Send rent reminder for Canal House unit 903",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
  {
    id: "task-5",
    title: "Verify municipal tax installment before July deadline",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
  {
    id: "task-6",
    title: "Send rent reminder for Canal House unit 903",
    location: "CapEx • 245 Rideau Street",
    due: "Due 7/18/2025",
  },
];

export const projectionBars = [30, 38, 49, 44, 53, 35, 50, 28, 58, 72];

export const propertyUnitStates = [
  "occupied",
  "occupied",
  "occupied",
  "occupied",
  "occupied",
  "occupied",
  "occupied",
  "renovation",
  "renovation",
  "renovation",
  "vacant",
  "vacant",
] as const;
