import FooterNav from "./FooterNav";

export default function Footer(params) {
  return (
    <footer
      className={`flex flex-col items-center justify-center bg-[#48C0C0] text-sm text-white`}
    >
      <FooterNav />
      <div className="container py-6">
        Copyright &copy; {new Date().getFullYear()} Recipt Guru. All Rights
        Reserved
      </div>
    </footer>
  );
}
