import styles from "@/components/layout/layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return <div className={styles.hero}>{props.children}</div>;
};
