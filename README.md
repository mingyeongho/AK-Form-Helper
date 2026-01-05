# AK Form Helper

엑셀 발주서 데이터를 손쉽게 관리할 수 있는 데스크톱 애플리케이션입니다.

## 주요 기능

- 엑셀에서 복사한 발주서 테이블 데이터를 자동으로 파싱
- 발주서 ID, 품목명, 팔레트 개수, 순중량, 총중량 등의 데이터를 테이블 형태로 표시
- 데스크톱 네이티브 애플리케이션으로 빠르고 안정적인 성능

## 기술 스택

- **Frontend**: React 19 + TypeScript
- **UI**: Tailwind CSS 4, Radix UI, Lucide Icons
- **Build Tool**: Vite 7
- **Desktop Framework**: Tauri 2
- **Backend**: Rust
- **Package Manager**: pnpm

## 개발 환경 설정

### 필수 요구사항

- [Node.js](https://nodejs.org/) (v18 이상 권장)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd ak-form-helper

# 의존성 설치
pnpm install
```

## 사용 방법

### 개발 모드 실행

```bash
# Tauri 개발 모드 (권장)
pnpm tauri dev

# 또는 프론트엔드만 실행
pnpm dev
```

### 프로덕션 빌드

```bash
# 데스크톱 앱 빌드
pnpm tauri build

# 프론트엔드만 빌드
pnpm build
```

### 기타 명령어

```bash
# 프론트엔드 프리뷰
pnpm preview

# Rust 코드 체크
cd src-tauri
cargo check

# Rust 테스트 실행
cargo test
```

## 프로젝트 구조

```
ak-form-helper/
├── src/                    # React 프론트엔드 소스
│   ├── components/        # UI 컴포넌트
│   ├── lib/              # 유틸리티 함수
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # React 엔트리 포인트
├── src-tauri/             # Tauri/Rust 백엔드
│   ├── src/
│   │   ├── lib.rs        # Tauri 명령어 및 앱 초기화
│   │   └── main.rs       # Rust 엔트리 포인트
│   ├── Cargo.toml        # Rust 의존성
│   └── tauri.conf.json   # Tauri 설정
└── package.json          # Node.js 의존성
```

## 사용법

1. 앱을 실행합니다.
2. 엑셀에서 발주서 테이블 데이터를 복사합니다.
3. 앱의 텍스트 영역에 붙여넣습니다.
4. 자동으로 파싱된 데이터가 테이블에 표시됩니다.

## 추천 IDE 설정

- [VS Code](https://code.visualstudio.com/)
  - [Tauri Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## 라이선스

MIT
