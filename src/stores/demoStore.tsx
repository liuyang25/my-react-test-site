import { observable, action, computed } from 'mobx';

export class DemoStore {
  @observable testStr1: string;
  @observable testStr2: string;
  @observable obNum: number;
  notObNum: number;

  setTestStr1(str: string) {
    this.testStr1 = str;
  }
  @action.bound
  setTestStr2(str: string) {
    this.testStr2 = str;
  }

  setNobNum(n: number) {
    this.notObNum = n;
  }
  @computed
  get computedNum1() {
    return this.obNum;
  }

  get computedNum2() {
    return this.obNum;
  }
}

export default new DemoStore();