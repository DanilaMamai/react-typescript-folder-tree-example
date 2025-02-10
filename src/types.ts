/**
 * Сущность дерева
 * @property children - подразделы и файлы
 * @property isFolder - флаг папки
 * @property name - наименование
 * @property uuid - идентификатор
 */
type TreeEntity = {
  children: Array<TreeEntity>;
  isFolder: boolean;
  name: string;
  uuid: string;
};

export { type TreeEntity };
