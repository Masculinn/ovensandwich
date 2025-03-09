import { UseInViewOptions } from "motion/react";

export interface AnimationObjProps {
  [key: string]: any;
}
export interface TransitionDurationProps {
  animationDuration: number;
  easeDuration: number;
}
export interface ViewAnimationControllerProps {
  elementType: React.ElementType;
  mode: AnimationKeys | AnimationKeys[];
  configView?: UseInViewOptions;
  children?: React.ReactNode;
  reverse?: boolean;
  className?: string;
  isControlled?: AnimationController;
  delay?: number;
  isAnimationStopped?: boolean;
  transition?: TransitionKeys;
  duration?: number;
  [key: string]: any;
}
export interface MotionEngineProps {
  delay?: number;
  reverse?: boolean;
  duration?: number;
  isAnimationStopped: boolean;
}
export interface EngineControllerProps {
  controllerTrigger: boolean;
  controllerConfig: MotionEngineProps;
  controllerMode: AnimationKeys[] | AnimationKeys;
  controllerTransition: TransitionKeys;
}
export type MotionEngineType = "container" | "text" | "queue";
export interface AnimationController {
  trigger: boolean;
}
export interface AnimationLibraryProps {
  [key: string]: {
    initial: AnimationObjProps;
    animate: AnimationObjProps;
  };
}
export interface TransitionConfig {
  duration?: number;
  ease?: string | number[];
  delay?: number;
}
export interface MotionTextKeywordsProps {
  word: string;
  animation: AnimationKeys | AnimationKeys[];
}
export interface MotionTextProps {
  className?: string;
  keywords: MotionTextKeywordsProps[];
  highlightLastIndexFrom?: number;
}
export interface AnimationQueueProps {
  animations: AnimationQueueAnimationProps[];
  duration?: number;
  className?: string;
  isDynamicallyQueued?: boolean;
  delayByElement?: number;
  children: React.ReactNode[];
  elementType: React.ElementType;
}
export interface AnimationQueueAnimationProps {
  mode: AnimationKeys | AnimationKeys[];
  reverse?: boolean;
  className?: string;
  isControlled?: AnimationController;
  delay?: number;
  isAnimationStopped?: boolean;
  transition?: TransitionKeys;
  duration?: number;
  configView?: UseInViewOptions;
}
export interface UseAnimationMixerProps {
  animations: AnimationLibraryProps[] | AnimationLibraryProps;
  reverse?: boolean;
}
export interface UseOutputAnimationMixerProps {
  initial: AnimationObjProps;
  animate: AnimationObjProps;
}
export interface UseMotionProps {
  stopAnimation: boolean;
  reverseAnimation?: boolean;
  recallDuration?: number;
}
export interface UseMotionOutputProps {
  isAnimationStopped: boolean;
  reverse: boolean;
}

export interface calculateDelayProps {
  delayLogic: DelayLogic;
  index: number;
  baseDuration: number;
  customLogic?: (index: number) => number;
}

export interface ImageMotionProps {
  imageUrl: string;
  pieces: number;
  animations: AnimationKeys[] | AnimationKeys;
  fallback?: React.ReactNode;
  motionFn?: ImageMotionFnTypes;
  transition?: TransitionKeys;
  totalDelay?: number;
  animationDuration?: number;
  configView?: UseInViewOptions;
  controlConfig?: ImageMotionCASProps;
  wrapperClassName?: string;
  elementClassname?: string;
  delayLogic?: DelayLogic;
  customDelayLogic?: (index: number) => number;
  isDynamicallyQueued?: boolean;
}
export interface ImageMotionCASProps {
  isControlled: boolean;
  isAnimationStopped: boolean;
  reverse: boolean;
}
export interface ImageQueueProps {
  images: string[];
  pieces: number;
  enterAnimation: AnimationKeys[] | AnimationKeys;
  exitAnimation: AnimationKeys[] | AnimationKeys;
  fallback?: React.ReactNode;
  motionFn?: ImageMotionFnTypes;
  transition?: TransitionKeys;
  totalDelay?: number;
  animationDuration?: number;
  configView?: UseInViewOptions;
  controlConfig?: ImageMotionCASProps;
  wrapperClassName?: string;
  elementClassname?: string;
  delayLogic?: DelayLogic;
  customDelayLogic?: (index: number) => number;
  isDynamicallyQueued?: boolean;
}

export type ImageMotionFnTypes = "hover" | "click";

export type DelayLogic = "linear" | "chaotic";

export type AnimationKeys = "fadeIn" | "fadeRight" | "filterBlurIn";

export type TransitionKeys =
  | "none"
  | "default"
  | "smooth"
  | "linear"
  | "slowSmooth";
