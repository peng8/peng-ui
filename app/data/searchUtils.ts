// 搜索文本归一化 —— server（构建搜索索引）与 client（归一化查询词）共用，
// 避免两处实现漂移导致召回率下降或误匹配。
export const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9一-龥]+/g, ' ')
    .trim()
