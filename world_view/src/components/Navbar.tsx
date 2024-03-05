type NavbarProps = {
  onSearch: (searchTerm: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <div className="Home">
      <button className="Home2">Home</button>
      <input
        className="boutton-home"
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
