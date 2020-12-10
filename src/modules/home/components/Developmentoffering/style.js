import img1 from '../../../../assets/bgimage3.jpg';
import { colors } from '../../../../constants/color';
export const style = {
    bgimage2: {
        backgroundImage: `url(${img1})`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: ' auto',
        width: '100%',
        minHeight: '150px',
        backgroundRepeat: 'no-repeat',
        marginTop: '20px'

    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
    },
    heading: {
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: '40px',
        lineHeight: '1.75',
        paddingTop: '50px',
    },
    para: {
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        letterSpacing: '2px',
        fontSize: '20px',
    },
    icons: {
        backgroundPosition: '50% 50%',
        borderColor: colors.secondryColor,
        borderWidth: '1px',
        height: '50px',
        width: '50px',
        lineHeight: '100px',
        borderRadius: '50px',
        boxShadow: '0px 0px 2px #2176ff',
        color: colors.secondryColor,
        fontSize: '50px',
        marginTop: '30px',
        padding:'10px'
    },
    heading2: {
        fontWeight: '700',
        textAlign: 'left',
        color: '#fff',
        lineHeight: '1.25',
        fontSize: '20px',
        marginTop: '20px',
    },
    arrow: {
        width: '40px',
        height: '40px',
        color: '#fff',
    },
    arrow4: {
        width: '120px',
        height: '80px',
        color: '#fff',
        fontWeight:'700'
    },
    services: {
        fontSize: '20px',
        color: colors.primaryColor,
        marginTop: '20px',
        marginBottom: '30px',
    },
    hr: {
        width: '70%',
        border: '1px solid grey',
    },






}