import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BsArrowRight } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import ListHeader from './Header';
import { getData, handleSortChange } from 'redux-modules/modules/Search';
import SearchBar from 'components/SearchBar';
import { convertToRupiah, formatDate } from 'libs/common';
import StyledButton from 'components/Button';

const HomeContainer = (props) => {
  const {
    getData, history, dataHome, handleSortChange,
  } = props;

  useEffect(() => {
    getData();
  }, [getData]);

  const { sortTerm, data } = dataHome;
  let searchResults = data;

  // Live search
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  if (searchTerm) {
    data.forEach((sData) => {
      searchResults.push(sData);
      const dataSearch = searchResults.filter(
        (x) => x.beneficiary_name.toLowerCase().includes(searchTerm.toLowerCase())
          || x.beneficiary_bank.toLowerCase().includes(searchTerm.toLowerCase())
          || x.sender_bank.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      if (dataSearch) { searchResults = dataSearch; } else { searchResults = []; }
    });
  }

  const handleClickCard = (item, id) => {
    history.push({
      pathname: `/detail/${id}`,
      data: item,
    });
  };

  const content = () => searchResults.map((item, index) => (
    <div
      className={
        item.status === 'SUCCESS'
          ? 'box-green margin-top-2'
          : 'box-orange margin-top-2'
      }
      key={index}
      onClick={() => handleClickCard(item, item.id)}
    >
      <div className="bank-name text-left padding-left-2 padding-top-2">
        <>
          <strong>{item.sender_bank.toUpperCase()}</strong>
          <span style={{ position: 'relative', top: '2.5px' }}>
            <BsArrowRight />
          </span>
          <strong>{item.beneficiary_bank.toUpperCase()}</strong>
        </>
        <div className="d-flex">
          <div className="left">
            <div className="text-left padding-top-2">
              {item.beneficiary_name.toUpperCase()}
            </div>
          </div>
          <div className="float-right margin-right-2">
            <StyledButton
              styleClass={
                item.status === 'SUCCESS' ? 'btn-green' : 'btn-orange'
              }
              text={item.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
              handleClick={() => false}
            />
          </div>
        </div>
        <div className="padding-top-1 padding-bottom-2">
          <span>{`Rp${convertToRupiah(item.amount)}`}</span>
          <span className="padding-side-2">
            <FaCircle size="10px" />
          </span>
          <span className="padding-left-1">
            {formatDate('case-1', new Date(item.created_at))}
          </span>
        </div>
      </div>
    </div>
  ));

  const empty = (<h4>Terjadi kesalahan dalam menampilkan data</h4>);

  return (
    <div className="home">
      <div className="wrapper">
        <ListHeader data={searchResults} />
        <div className="margin-top-4">
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            sortTerm={sortTerm}
            handleSortChange={handleSortChange}
          />
        </div>
        <div className="wrapper-content">{searchResults ? content() : empty}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dataHome: state.search,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getData,
    handleSortChange,
  },
  dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
