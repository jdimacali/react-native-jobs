import { ImageRequireSource, ImageURISource } from "react-native";

export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;
