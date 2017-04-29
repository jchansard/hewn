import { ITreeResponse } from '../../common/json-data/json.ITreeResponse';

export class HewnTree {

  constructor(
    public id: number,
    public color: string,
    public pointData: number[][]
  ) { }

}

export class HewnTreeFactory {
  public build(id: number, color: string, pointData: number[][]):HewnTree {
    return new HewnTree(id, color, pointData);
  }

  public buildFromJSON(jsonData:ITreeResponse) {
    return new HewnTree(jsonData.id, jsonData.color, jsonData.pointData);
  }
}
