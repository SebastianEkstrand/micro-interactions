import { type ChangeEvent } from "react";
import type { ISearchProps } from "./Search.definitions";

export const useSearchMainHook = ({ onChangeCallback }: ISearchProps) => {
  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const searchFor: string = e.target.value;

    if (onChangeCallback) {
      onChangeCallback(searchFor);
    }
  };

  return { onSearchChanged };
};
