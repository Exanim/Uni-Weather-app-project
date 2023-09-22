
export class DataList {
  constructor(
    public dt: number,
    public main: Object,
    public weather: Array<Object>,
    public clouds: Object,
    public wind: Object,
    public visibility: number,
    public pop: number,
    public rain: Object,
    public sys: Object,
    public dt_txt: string
  ) {}
}
