import dayjs from "dayjs";

export const formatDate = (x: string) => {
  return dayjs(x).format("DD MMM YYYY, h:mm:ss a");
  // return new Date(x).toLocaleDateString();
};
