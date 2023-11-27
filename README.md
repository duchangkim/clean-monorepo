## 프로젝트 실행 방법
```shell
npm start
```

프로젝트는 npm start를 통해 아래 3가지 과정을 거쳐 개발서버를 실행합니다.

1. `npm install`
2. `lerna bootstrap`
3. `nx run-many --target=serve --configuration=dev`
