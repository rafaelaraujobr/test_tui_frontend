interface Pagination {
  sortBy: string;
  descending: boolean;
  page: number;
  rowsPerPage: number;
  rowsNumber: number;
  orderBy: string;
  total: number;
  pages: number;
}

export default Pagination;
