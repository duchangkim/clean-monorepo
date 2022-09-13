# 두꺼비세상 프론트엔드 React 보일러 플레이트

## 설치

### 선행작업

@duse-corp 하위의 패키지 설치를 위해 .npmrc 설정  
프로젝트 루트에 `.npmrc` 파일 생성 후 아래 코드블럭 붙여넣기

```
//npm.pkg.github.com/:_authToken=여기에깃헙퍼스널액세스토큰을넣으세요
@duse-corp:registry=https://npm.pkg.github.com/
```

<br />

```shell
npm ci

npm i

npm install
```

## npm scripts

- `start` > 로컬 개발시에 사용 (HMR이 적용된 webpack-dev-server)
- `build:dev` > 개발 환경으로 빌드 (개발 서버 배포 목적)
- `build:prod` > 운영 환경으로 빌드 (운영 서버 배포 목적)
- `test` > 테스트 실행
- `test:watch` > 테스트 watch모드로 실행 (jest --watchAll)
