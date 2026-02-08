FROM eclipse-temurin:21-jdk-noble
#JDK 버전 21 UBUNTU 이미지 24.04.03(noble) 사용, JAMMY에서 변경합니다.

WORKDIR /backend
#컨테이너 내 생성되는 작업폴더, app이라고 해도 되나 backend가 더 명확

COPY build/libs/*.jar backend.jar
#호스트의 빌드된 jar파일을 컨테이너의 backend.jar로 복사

EXPOSE 8080
#컨테이너가 8080포트를 사용한다고 명시

ENTRYPOINT ["java","-jar","backend.jar"]
#기존 CMD이나 ENTRYPOINT가 더 안전하다고 함
