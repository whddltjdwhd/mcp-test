// TextGenerator.jsx (기초 실습 - genai 적용 전)
import { useState } from "react";

export default function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("프롬프트를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult("");

    try {
      // TODO: 여기에 실제 AI 텍스트 생성 로직을 구현해야 합니다.
      // 현재는 mock 응답을 반환합니다.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setResult(
        `[Mock Response]\n입력하신 프롬프트: "${prompt}"\n\n` +
          `실제 구현에서는 여기에 AI가 생성한 텍스트가 표시됩니다.\n` +
          `Context7을 이용해 google/genai 라이브러리를 학습하고 이 부분을 구현해보세요!`
      );
    } catch (err) {
      setError(err.message || "텍스트 생성 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-generator">
      <h4>AI 텍스트 생성기</h4>
      <div className="generator-container">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="생성하고 싶은 텍스트의 프롬프트를 입력하세요..."
          rows={4}
          disabled={isLoading}
        />

        <button onClick={handleGenerate} disabled={isLoading || !prompt.trim()}>
          {isLoading ? "생성 중..." : "텍스트 생성"}
        </button>

        {error && (
          <div className="error-box">
            <p className="error">{error}</p>
          </div>
        )}

        {result && (
          <div className="result-box">
            <h5>생성 결과:</h5>
            <pre>{result}</pre>
          </div>
        )}

        <div
          className="info-box"
          style={{ marginTop: "1rem", fontSize: "0.9em" }}
        >
          <p>
            <strong>📝 실습 과제:</strong>
            <br />
            Context7을 이용해서 google/genai 라이브러리를 학습하고
            <br />
            텍스트 생성을 생성형 AI를 사용하도록 변경해보세요!
          </p>
        </div>
      </div>
    </div>
  );
}
