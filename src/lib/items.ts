import { Task } from "../types";

export const getMoreElements = async (startIndex: number, size: number) => {
  const elements: Task[] = Array.from({ length: size }, (_, i) => ({
    id: i + startIndex,
    text: `Task ${i + 1 + startIndex}`,
  }));
  return elements;
};
