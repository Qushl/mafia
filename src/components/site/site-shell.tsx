import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingCta } from "./floating-cta";
import { LeadModalProvider } from "./lead-modal";

export function SiteShell({
  children,
  brand,
  phone,
  contentFooter,
}: {
  children: React.ReactNode;
  brand: string;
  phone: string;
  contentFooter: React.ComponentProps<typeof Footer>["content"];
}) {
  return (
    <LeadModalProvider>
      <Header brand={brand} phone={phone} />
      {children}
      <Footer content={contentFooter} />
      <FloatingCta phone={phone} />
    </LeadModalProvider>
  );
}
