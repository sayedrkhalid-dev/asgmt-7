export default function HomePage() {
  return <h1>Home page</h1>;
import NavbarCom from "@/components/NavbarCom";
import BannerCom from "@/components/BannerCom";

export default function Home() {
  return (
    <>
      <NavbarCom />
      <BannerCom />
    </>
  );
}
