export interface TabMainProps {
  tabName: string;
  pathName: string;
  active: boolean;
  disabled: boolean;
}
export interface TabProps {
  option: TabMainProps[];
}
