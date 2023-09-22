import { DataList } from './list.model';

export class getModel {
  constructor(
    public cod: string,
    public message: number,
    public cnt: number,
    public list: Array<DataList>
  ) {}
}
