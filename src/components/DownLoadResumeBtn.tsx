import Link from "next/link";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="/resume.pdf" target="_blank">
        <HackerBtn label="Download Resume" />
      </Link>
    </div>
  );
}

export default DownLoadResumeBtn;