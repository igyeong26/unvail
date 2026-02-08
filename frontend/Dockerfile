FROM node:24-alpine
#최신 LTS 버전인 24-alpine 사용합니다.

WORKDIR /frontend
#컨테이너 내 생성되는 작업폴더입니다.

COPY . .
#작동 했던 코드

RUN npm ci
#나머지 소스 코드 복사

EXPOSE 3000
#포트 명시 3000번 사용 (없어도 되나 명시하는게 좋음)

CMD ["npm","start"]
#실행 명령어
