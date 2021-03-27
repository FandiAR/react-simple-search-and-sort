import HomeContainer from "../containers/HomeContainer";
import PageTitle from '../components/PageTitle';

const HomePage = (props) => {
    const { history } = props;
    return (
        <PageTitle title="Home">
            <HomeContainer history={history} />
        </PageTitle>
    );
};
export default HomePage;