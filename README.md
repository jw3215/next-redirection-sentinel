# next-redirection-sentinel

- Next.js App router에서 `redirect()` 함수로 발생하는 리디렉션을 조작하는 코드입니다.
- React Error Boundary 컨벤션을 따릅니다.
- `pathMap`의 key와 일치하는 문자열을 value로 치환합니다.

에를 들어 이런 `pathMap`이 주어진다면

```javascript
const pathMap = {
  "http://localhost:3000": "http://my-site.com",
};
```

아래와 같이 경로를 치환합니다.

```plainText
http://localhost:3000         -> http://my-site.com
http://localhost:3000/users   -> http://my-site.com/users
http://localhost:3000/users/1 -> http://my-site.com/users/1
```

## 사용법

- `SomeChildComponent`에서 `redirect()`로 트리거 된 리디렉션 중에
- Google로 향하는 리디렉션이 있다면, Naver로 변경합니다.

```tsx
export default function Page() {
  const pathMap = {
    "https://google.com": "https://naver.com",
  };

  return (
    <RedirectionSentinelBoundary pathMap={pathMap}>
      <SomeChildElement />
    </RedirectionSentinelBoundary>
  );
}
```
