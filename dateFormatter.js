class DateFormatter {
  getFormattedDate(currentTime) {
    const now = currentTime;
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}

module.exports = DateFormatter;
