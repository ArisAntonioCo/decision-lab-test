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

export type WealthProjectionPoint = {
  year: string;
  conservative: number;
  likely: number;
  optimistic: number;
};

export type SpendingAnalyticsPoint = {
  year: string;
  amount: number;
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

export const wealthProjectionData: WealthProjectionPoint[] = [
  { year: "2025", conservative: 13.4, likely: 13.4, optimistic: 13.4 },
  { year: "2027", conservative: 17.2, likely: 17.8, optimistic: 18.4 },
  { year: "2029", conservative: 20.4, likely: 22.6, optimistic: 23.8 },
  { year: "2031", conservative: 23.5, likely: 27.8, optimistic: 29.6 },
  { year: "2033", conservative: 26.5, likely: 33.2, optimistic: 35.9 },
  { year: "2035", conservative: 30.1, likely: 39.0, optimistic: 42.1 },
  { year: "2037", conservative: 34.1, likely: 45.0, optimistic: 49.7 },
  { year: "2039", conservative: 38.8, likely: 51.3, optimistic: 58.2 },
  { year: "2041", conservative: 43.2, likely: 58.0, optimistic: 67.1 },
  { year: "2043", conservative: 48.9, likely: 65.4, optimistic: 77.8 },
  { year: "2045", conservative: 54.4, likely: 74.2, optimistic: 89.7 },
];

export const spendingAnalyticsData: SpendingAnalyticsPoint[] = [
  { year: "2025", amount: 25 },
  { year: "2027", amount: 40 },
  { year: "2029", amount: 60 },
  { year: "2031", amount: 56 },
  { year: "2033", amount: 65 },
  { year: "2035", amount: 40 },
  { year: "2037", amount: 60 },
  { year: "2039", amount: 28 },
  { year: "2041", amount: 70 },
  { year: "2043", amount: 84 },
];

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
