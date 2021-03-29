import { convertToRupiah } from '../../libs/common';

const ListHeader = (props) => {
  const { data } = props;
  const sum = data ? data.reduce((accumulator, current) => accumulator + current.amount, 0) : 0;

  return (
    <>
      <div className="text-black font-42 padding-top-4">Daftar Transaksi</div>
      <div className="text-black text-left font-36 text-bold padding-top-4">Halo kak!</div>
      <div className="text-black text-left font-22 padding-top-2">
        Kamu telah melakukan transaksi sebesar
        {' '}
        {' '}
        <span className="text-orange">{`Rp${convertToRupiah(sum)}`}</span>
        {' '}
        {' '}
        sejak menggunakan Flip.
      </div>
    </>
  );
}
export default ListHeader;
