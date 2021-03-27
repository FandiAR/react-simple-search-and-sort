import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    const {
        searchTerm, handleSearchChange,
        sortTerm, handleSortChange,
    } = props;
    return (
        <div className="d-flex search-box">
            <FaSearch className="search-icon" />
            <span className="padding-left-2">
                <input
                    className="search-term"
                    placeholder="Cari nama atau bank"
                    autoComplete="off"
                    type="text"
                    name="search"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    value={searchTerm}
                />
            </span>
            <span className="sort">
                <select value={sortTerm} onChange={(e) => handleSortChange(e.target.value)}>
                    <option value="">URUTKAN</option>
                    <option value="asc">Nama A-Z</option>
                    <option value="desc">Nama Z-A</option>
                    <option value="newer">Tanggal Terbaru</option>
                    <option value="older">Tanggal Terlama</option>
                </select>
                <span className="focus"></span>
            </span>
        </div>
    );
};
export default SearchBar;
