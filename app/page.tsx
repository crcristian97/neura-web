import { TypewriterEffectSmoothDemo } from "./components/TypewriterEffectSmoothDemo";
import { FeaturesSection } from "./components/FeaturesSection";
import { SignupForm } from "./components/FormSign";
import { LayoutGridProject } from "./components/LayoutGridProject";
export default function Home() {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      <div id="services-section">
        <FeaturesSection />
      </div>
      <LayoutGridProject />
      <div id="signup-form">
        <SignupForm />
      </div>
    </>
  );
}
