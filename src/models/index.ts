export interface LayoutProps {
  children: React.ReactNode;
}

export interface publicRoute {
  path: string;
  component: () => JSX.Element;
  layout?: (layoutProps: LayoutProps) => JSX.Element;
}
