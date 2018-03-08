import { observable, action, computed } from 'mobx';

export class DemoStore {
  @observable testStr1: string;
  @observable testStr2: string;
  @observable obNum: number;
  nobNum: number;

  setTestStr1(str: string) {
    this.testStr1 = str;
  }
  @action.bound
  setTestStr2(str: string) {
    this.testStr2 = str;
  }

  setNobNum(n: number) {
    this.nobNum = n;
  }
  @computed
  get data() {
    return {
      testStr1: this.testStr1,
      testStr2: this.testStr2,
      obNum : this.obNum,
      nobNum : this.nobNum,
    };
  }
  set data(data: any) {
    this.testStr1 = data.testStr1;
    this.testStr2 = data.testStr2;
    this.obNum = data.obNum;
    this.nobNum = data.nobNum;
  }
  @computed
  get computedNum1() {
    return this.obNum;
  }

  get computedNum2() {
    return this.nobNum;
  }
}

export default new DemoStore();