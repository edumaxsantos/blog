const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const formattedDate = (date) =>
  Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
