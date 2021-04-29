import DetailContainer from 'containers/DetailContainer';
import PageTitle from 'components/PageTitle';

const Detail = (props) => {
    const { history } = props;

    return (
        <PageTitle title="Detail">
            <DetailContainer history={history} />
        </PageTitle>
    );
};
export default Detail;
