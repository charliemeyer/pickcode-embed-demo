import { useState } from "react";

function App() {
  const [showSetup, setShowSetup] = useState(false);
  const [token, setToken] = useState("");
  const [baseURL, setBaseURL] = useState("http://localhost:5173");
  const [organization, setOrganization] = useState("pickcode-dev");
  const [ownerId, setOwnerId] = useState("");
  const [lessonId, setLessonId] = useState("");

  const url = `${baseURL}/project/embed?lessonId=${lessonId}&ownerId=${ownerId}?preferencesProfile=hello-world#&organization=${organization}&token=${token}`;
  return (
    <div className="h-full w-full bg-[#5C71F2] flex">
      <div className="flex flex-col gap-2 p-4">
        <div>
          <div className="text-white font-bold">Organization</div>
          <input
            type="text"
            className="rounded p-1"
            value={organization}
            onChange={(e) => setOrganization(e.currentTarget.value)}
          />
        </div>
        <div>
          <div className="text-white font-bold">Token</div>
          <input
            type="text"
            className="rounded p-1"
            value={token}
            onChange={(e) => setToken(e.currentTarget.value)}
          />
        </div>
        <div>
          <div className="text-white font-bold">OwnerId</div>
          <input
            type="text"
            className="rounded p-1"
            value={ownerId}
            onChange={(e) => setOwnerId(e.currentTarget.value)}
          />
        </div>
        <div>
          <div className="text-white font-bold">LessonId</div>
          <input
            type="text"
            className="rounded p-1"
            value={lessonId}
            onChange={(e) => setLessonId(e.currentTarget.value)}
          />
        </div>
        <div>
          <div className="text-white font-bold">Environment</div>
          <select
            value={baseURL}
            onChange={(e) => setBaseURL(e.currentTarget.value)}
          >
            <option value={"http://localhost:5173"}>Local</option>
            <option value="https://dev.pickcode.io">Dev</option>
          </select>
        </div>
      </div>
      <div className="w-full h-full flex-col p-4">
        <iframe
          src={url}
          className="bg-white w-full h-full rounded-xl border-blue-400 border-8"
        />
      </div>
    </div>
  );
}

export default App;
