export function employeesProperties(data) {
  return {
      totalPages: (Math.floor(data.length / 10) + ((data.length % 10) > 0 ? 1 : 0)),
      currentPage : 1
};
}
