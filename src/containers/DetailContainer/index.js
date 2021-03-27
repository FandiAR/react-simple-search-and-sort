import { FaEnvelopeOpenText } from 'react-icons/fa';
import StyledButton from '../../components/Button';
import { convertToRupiah, formatDate } from '../../libs/common';

const DetailContainer = (props) => {
    const { history } = props;
    const { location } = history;
    const { data } = location;

    const content = (
        <div className="box-content">
            <div className="left-content">
                <FaEnvelopeOpenText className="envelope" />
            </div>
            <div className="padding-left-4 text-left">
                <div className="font-18 text-bold">PENGIRIM</div>
                <div className="font-18 text-bold text-500 padding-top-1">{data.sender_bank.toUpperCase()}</div>
                <div className="padding-top-4">
                    <div className="font-18 text-bold">PENERIMA</div>
                    <div className="font-18 text-bold text-500 padding-top-1">{data.beneficiary_bank.toUpperCase()}</div>
                    <div className="font-18 text-bold text-500 padding-top-1">{data.account_number}</div>
                    <div className="font-18 text-bold text-500 padding-top-1">{data.beneficiary_name}</div>
                </div>
                <div className="padding-top-4">
                    <div className="font-18 text-bold">NOMINAL</div>
                    <div className="font-18 text-bold text-500 padding-top-1">{`Rp${convertToRupiah(data.amount)}`}</div>
                    <div className="font-18 text-bold text-500 padding-top-1">
                        <span className="text-bold">Kode Unik:</span>
                        {' '}
                        <span className="text-500">{data.unique_code}</span>
                    </div>
                </div>
                <div className="padding-top-4">
                    <div className="font-18 text-bold">WAKTU DIBUAT</div>
                    <div className="font-18 text-bold text-500 padding-top-1">
                        {formatDate('case-1', new Date(data.created_at))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="home">
            <div className="wrapper">
                <div className="text-black font-42 padding-top-4">Daftar Transaksi</div>
                <div className="margin-top-4 box-header-detail">
                    <p className="left-header text-bold font-18">{`ID TRANSAKSI: #${data.id}`}</p>
                    <span className="right-header">
                        <StyledButton
                            styleClass={
                                data.status === 'SUCCESS' ? 'btn-green' : 'btn-orange'
                            }
                            text={data.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
                            handleClick={() => false}
                        />
                    </span>
                </div>
                <div className="margin-top-4">{content}</div>
                <div className="margin-top-4 float-left">
                    <StyledButton
                        styleClass="btn-orange text-orange bg-trans"
                        text="Kembali"
                        handleClick={() => history.push('/')}
                    />
                </div>
            </div>
        </div>
    );
};
export default DetailContainer;

