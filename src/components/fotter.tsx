export default function Fotter() {
  return (
    <footer className="mt-10 bg-[#232328] px-6 py-4 flex flex-col items-center">
      
      <p className="font-mono text-xs text-gray-500">
       @manov_ik © {new Date().getFullYear()} · Designed &amp; developed by{" "}
        <a
          href="https://digiclickstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BB77FF] hover:underline"
        >
          Digi Click Studios
        </a>
      </p>
    </footer>
  );
}
