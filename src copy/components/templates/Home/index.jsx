// Styles
import { HomeTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Sections
import HomeSection from "@/components/sections/Home"
import ExpertiseSection from "@/components/sections/Expertise"
import WorkSection from "@/components/sections/Work"
import ContactSection from "@/components/sections/Contact"

export default function HomeTemplate() {
  return (
    <Layout>
      <HomeTemplateStyle>
        <HomeSection />
        <ExpertiseSection />
        <WorkSection />
        <ContactSection />
      </HomeTemplateStyle>
    </Layout>
  )
}