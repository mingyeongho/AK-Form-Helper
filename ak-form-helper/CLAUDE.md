# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tauri + React + TypeScript desktop application called "AK Form Helper". The project uses:
- **Frontend**: React 19 with TypeScript, built with Vite
- **Backend**: Tauri 2 (Rust-based desktop app framework)
- **Package Manager**: pnpm

## Development Commands

### Frontend Development
```bash
pnpm dev              # Start Vite dev server (port 1420)
pnpm build            # Build frontend (TypeScript + Vite)
pnpm preview          # Preview production build
```

### Tauri Desktop App
```bash
pnpm tauri dev        # Run app in development mode (starts Vite dev server automatically)
pnpm tauri build      # Build production desktop app
```

### Rust Backend
```bash
cd src-tauri
cargo build           # Build Rust backend
cargo check           # Check Rust code without building
cargo test            # Run Rust tests
```

## Git Commit Convention

**IMPORTANT**: All commits MUST follow Conventional Commits format and be written in Korean.

Format: `<type>(<scope>): <description in Korean>`

Types:
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- `refactor`: 코드 리팩토링 (기능 변경 없음)
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 프로세스, 패키지 매니저 설정 등
- `perf`: 성능 개선

Examples:
```
feat(frontend): 사용자 입력 폼 컴포넌트 추가
fix(tauri): greet 명령어 한글 인코딩 문제 수정
docs: README에 설치 방법 추가
refactor(app): 상태 관리 로직 개선
chore(deps): React 19.2로 업데이트
```

## Architecture

### Project Structure
```
/src                  # React frontend source
  App.tsx            # Main React component
  main.tsx           # React entry point
  App.css            # Styles

/src-tauri           # Tauri/Rust backend
  src/
    lib.rs           # Tauri commands and app initialization
    main.rs          # Entry point (calls lib.rs::run())
  Cargo.toml         # Rust dependencies
  tauri.conf.json    # Tauri configuration
  capabilities/      # Tauri security capabilities
  icons/             # App icons
```

### Frontend-Backend Communication

The app uses Tauri's IPC (Inter-Process Communication) pattern:
- **Frontend**: Call Rust functions using `invoke()` from `@tauri-apps/api/core`
- **Backend**: Define commands with `#[tauri::command]` macro in `lib.rs`
- Commands are registered in the Tauri builder via `invoke_handler(tauri::generate_handler![...])`

Example flow:
1. Frontend: `await invoke("greet", { name: "World" })`
2. Backend: `#[tauri::command] fn greet(name: &str) -> String`
3. Commands are registered in `lib.rs::run()`

### Tauri Configuration

Key settings in `src-tauri/tauri.conf.json`:
- Development server: `http://localhost:1420` (Vite)
- Build commands: `beforeDevCommand` and `beforeBuildCommand` use pnpm
- Frontend dist: `../dist` (Vite output)
- Window size: 800x600 default

### TypeScript Configuration

Strict mode enabled with:
- `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- Target: ES2020
- Module resolution: bundler mode
- JSX: react-jsx

## Important Notes

### Adding Tauri Commands
1. Define command in `src-tauri/src/lib.rs` with `#[tauri::command]`
2. Add to `invoke_handler` in the builder:
   ```rust
   .invoke_handler(tauri::generate_handler![greet, new_command])
   ```
3. Call from frontend: `invoke("new_command", { args })`

### Tauri Plugins
Currently using:
- `tauri-plugin-opener` - for opening URLs/files

To add new plugins:
1. Add to `src-tauri/Cargo.toml` dependencies
2. Register in builder: `.plugin(plugin_name::init())`

### Development Server Ports
- Vite: 1420 (configured in `vite.config.ts` as `strictPort`)
- HMR: 1421 (when using `TAURI_DEV_HOST`)

### Library Crate Name
The Rust library uses `ak_form_helper_lib` (with underscore) to avoid naming conflicts on Windows, while the package name is `ak-form-helper` (with hyphen).
