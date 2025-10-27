import { useRef, useState, type ChangeEvent } from "react";
import type { ISearchProps } from "./Search.definitions";

export const useSearchMainHook = ({ onChangeCallback }: ISearchProps) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const searchFor: string = e.target.value;

    if (onChangeCallback) {
      onChangeCallback(searchFor);
    }
  };

  const onClickShow = () => {
    setShowInput(true);

    setTimeout(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, 500);
  };

  return { onSearchChanged, showInput, onClickShow, inputRef };
};
