export interface NavItem {
  selector: string;
  name: string;
}

export interface FloatItem {
  src: string;
  alt: string;
  height: number;
  width: number;
  top: number;
  left: number;
}

export interface FloatItems {
  data: FloatItem[];
  isMobile: boolean;
  wrapperStyle: string;
}

export interface UIButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  children: React.ReactNode;
  className?: string;
}

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "brand"
  | "accent1"
  | "accent2";

export interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export type CardProps = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};
