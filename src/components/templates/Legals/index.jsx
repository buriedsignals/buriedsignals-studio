// Styles
import { LegalsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"

export default function LegalsTemplate({ children }) {
  return (
    <Layout>
      <LegalsTemplateStyle className="container-module-large">
        { children }
      </LegalsTemplateStyle>
    </Layout>
  )
}