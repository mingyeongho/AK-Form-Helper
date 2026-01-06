<p align="center">
  <h3 align="center">🛠️✨AK Form Helper</h3>
  <p align="center">엑셀 발주서 데이터를 손쉽게 파싱해주는 데스크톱 애플리케이션입니다.</p>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/Tauri-24C8DB?logo=tauri&logoColor=white"/>
   <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black"/>
   <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white"/>
</p>

---

## Overview

이 프로젝트는 발주서 데이터를 AK Form으로 만드는 것을 도와주는 데스크톱 애플리케이션입니다.

## 주요 기능

- 엑셀에서 복사한 데이터를 발주서 테이블로 파싱
- 행과 셀 단위 복사 기능
- 동일한 Part No 별 필터링 기능

## 사용 방법

### for Windows

1. [AK-Form-Helper 랜딩페이지](https://mingyeongho.github.io/AK-Form-Helper/) 에 방문하여 "Download for Windows" 버튼을 눌러주세요.

2. 다운받은 .exe 파일을 실행시켜주세요.

3. Windows의 PC 보호 창이 뜨면 "추가 정보"를 누른 후 "실행" 버튼을 눌러주세요.

4. 설치를 완료하시면 ak-form-helper를 사용하실 수 있습니다!

### for macOS

1. 해당 저장소를 clone 해주세요.

```bash
git clone https://github.com/mingyeongho/AK-Form-Helper.git
```

2. 아래의 명령어들을 모두 실행시켜주세요.

```bash
# nvm 다운로드 및 설치:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Node.js 다운로드 및 설치:
nvm install 24

# Node.js 버전 확인:
node -v # "v24.12.0"가 출력되어야 합니다.
nvm current # "v24.12.0"가 출력되어야 합니다.

# Verify the Node.js version:
node -v # Should print "v24.12.0".

npm 버전 확인:
npm -v # 11.6.2가 출력되어야 합니다.

# Xcode 명령줄 도구 설치
xcode-select --install

# Rust 설치
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# 현재 폴더 이동
cd ./ak-form-helper/

# 종속성 설치
pnpm install

# 빌드
pnpm tauri build
```

3. 빌드된 DMG 파일을 실행시켜주세요.
