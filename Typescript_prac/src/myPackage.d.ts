//타입에 대해 설명하는 정의파일 d.ts
//정의파일은 자바스크립트 코드의 모양을 타입스크립트에 설명해주는 파일
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
