function Footer() {
  return (
    <footer className="pt-5">
      <div className="w-full bg-[#23272A] text-white">
        <hr />
        <div className="mx-auto py-5 grid grid-cols-3 gap-4 text-left xl:w-1/2">
          <div>
            <h1 className="text-xl font-bold">Outer.Chat</h1>
            <p>Chat in outer space</p>
          </div>

          <div>
            <h1 className="text-xl font-bold">Resources</h1>
            <ul>
              <li>Documentation</li>
              <li>GitHub</li>
              <li>API</li>
              <li><a href="https://raw.githubusercontent.com/outer-chat/.github/main/Branding.png" target="_blank">Branding</a></li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold">Legal</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
