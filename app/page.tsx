import RedirectionSentinelBoundary from "./component/RedirectionSentinelBoundary";
import SomeChildElement from "./component/SomeChildElement";

export default function Home() {
  const pathMap = {
    "https://google.com": "https://naver.com"
  }

  return (
    <RedirectionSentinelBoundary pathMap={pathMap}>
      <SomeChildElement />
    </RedirectionSentinelBoundary>
  );
}
