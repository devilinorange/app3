const dateFormat = (date) => {
  const fDate = new Date(
    date.substring(0, 4), //  YEAR
    date.substring(5, 7) - 1, //  MONTH
    date.substring(8, 10), // DAY
    date.substring(11, 13), //  HOURS
    date.substring(14, 16), //  MINUTES
    date.substring(17, 19), //  SECONDS
  );
  return fDate.toLocaleDateString('ru',
    {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
};

export default dateFormat;
