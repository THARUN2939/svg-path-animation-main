import PathAnimation from "@/components/PathAnimation";

export default function Home() {
  return (
    <main className="flex-col min-h-screen w-full dark:text-white">
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-[#432826] text-[24px] leading-[36px] font-[400] text-center dark:text-white">
          SVG Path Animation
        </h1>
        <p className="text-[16px] leading-[27px] text-[#432826] font-[400] text-center dark:text-white">
          This is a simple animation of a car following a path using GSAP
          MotionPath plugin.
        </p>
      </div>

      <PathAnimation />

      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-[#432826] text-[24px] leading-[36px] font-[400] dark:text-white">
          You saw that?
        </h1>
        <p className="text-[16px] leading-[27px] text-[#432826] font-[400] dark:text-white">
          The car is following the path. Isn&apos;t that cool?
        </p>
      </div>
    </main>
  );
}
