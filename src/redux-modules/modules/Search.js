const LOAD = 'modules/Home/LOAD';
const GET_DATA = 'modules/Home/GET_DATA';
const FAIL = 'modules/Home/FAIL';
const HANDLE_SORT_CHANGE = 'modules/Home/HANDLE_SORT_CHANGE';

const initialState = {
    sortTerm: '',
    searchTerm: '',
    data: [],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true,
                loaded: false,
            };

        case GET_DATA:
            const dataResult = action.result;
            state.data = Object.keys(dataResult).map(i => dataResult[i])

            return {
                ...state,
                loaded: true,
                loading: false,
            }

        case FAIL:
            return {
                loaded: true,
                loading: false,
                error: action.error,
            };

        case HANDLE_SORT_CHANGE:
            state.sortTerm = action.sort;
            state.data.sort((a, b) => {
                const firstName = a.beneficiary_name.split(' ').slice(0, -1).join(' ').toLowerCase();
                const lastName = b.beneficiary_name.split(' ').slice(0, -1).join(' ').toLowerCase();
                if (state.sortTerm === 'asc') { return firstName.localeCompare(lastName); }
                if (state.sortTerm === 'desc') { return lastName.localeCompare(firstName); }
                if (state.sortTerm === 'newer') { return new Date(b.created_at) - new Date(a.created_at); }
                if (state.sortTerm === 'older') { return new Date(a.created_at) - new Date(b.created_at); }
                return state.data;
            })
            return {
                ...state,
            }

        default:
            return state;
    }
}

export function getData() {
    const url = 'https://nextar.flip.id/frontend-test';
    return {
        types: [LOAD, GET_DATA, FAIL],
        promise: client => client.get(url, {}),
    };
}

export const handleSortChange = (sort) => {
    return {
        type: HANDLE_SORT_CHANGE,
        sort,
    }
};