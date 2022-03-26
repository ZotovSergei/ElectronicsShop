import en from "../../i18n/en.json";

export type i18nKeys = keyof typeof en;

export interface ITabs {
  value: string;
  labelIntlId: string;
}
export interface ListTabs {
  tabs: ITabs[];
}
