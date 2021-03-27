export const getMonthIndo = (month = false) => {
    let result = '';
    switch (month.toString()) {
        case '0':
            result = 'Januari';
            break;
        case '1':
            result = 'Februari';
            break;
        case '2':
            result = 'Maret';
            break;
        case '3':
            result = 'April';
            break;
        case '4':
            result = 'Mei';
            break;
        case '5':
            result = 'Juni';
            break;
        case '6':
            result = 'Juli';
            break;
        case '7':
            result = 'Agustus';
            break;
        case '8':
            result = 'September';
            break;
        case '9':
            result = 'Oktober';
            break;
        case '10':
            result = 'November';
            break;
        case '11':
            result = 'Desember';
            break;
        default:
    }
    return result;
}

export const formatDate = (format = 'case-1', date = new Date()) => {
    let result = '';

    if (date) {
        const dt = date.getDate();
        let month = date.getMonth();
        const year = date.getUTCFullYear();

        switch (format) {
            case 'case-1': // 25 November 2018
                month = getMonthIndo(month);
                result = `${dt} ${month} ${year}`;
                break;
            case 'case-3':
                const hour = date.getHours();
                const minute = date.getMinutes();

                result = `${hour}:${minute}`;
                break;
            case 'case-4': // 2019-01-20
                result = new Intl.DateTimeFormat('en-ZA', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }).format(date);
                break;
            case 'case-5': // 2019-01-20 00:00
                const tempDate = formatDate('case-4', date);
                const tempTime = formatDate('case-3', date);

                result = `${tempDate} ${tempTime}`;
                break;
            case 'case-6': // 31-12-2019
                result = new Intl.DateTimeFormat('id-Id', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }).format(date);
                break;
            case 'case-7': // 25 Nov 2018
                month = getMonthIndo(month).substring(0, 3);
                result = `${dt} ${month} ${year}`;
                break;
            case 'case-8': // 25 Nov
                month = getMonthIndo(month).substring(0, 3);
                result = `${dt} ${month}`;
                break;
            default:
        }
    }
    return result;
}

export const convertToRupiah = (angka) => {
    let rupiah = '';
    const angkarev = angka.toString().split('').reverse().join('');
    for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += `${angkarev.substr(i, 3)}.`;
    return rupiah.split('', rupiah.length - 1).reverse().join('');
};