import bgimg from '../../../../assets/bgimage3.jpg';
import { colors } from '../../../../constants/color';
export const style = {
    bgImage: {
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: ' 200px',
        width: '100%',
        minHeight: '150px',
        backgroundRepeat: 'no-repeat',
        marginTop: '185px'
    },
    heading: {
        textAlign: 'center',
        marginTop: '150px',
        fontSize: '42px',
        lineHeight: '1.5',
        color: colors.infoColor,
        fontWeight: '700',
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
    },
    align: {
        display: 'flex',
        flexDirection: 'colume',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
    },
    para: {
        textAlign: 'center',
        fontWeight: '300',
        letterSpacing: '2px',
        color: colors.primaryColor,
        marginTop: '30px',
        fontSize: '18px',
    },
    para2: {
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        letterSpacing: '2px',
    },

    bgColor: {
        backgroundColor: colors.secondryColor,
        marginBottom: '50px',
    },
    button: {
        backgroundColor: '#fff',
        lineHeight: '17px',
        fontSize: '14px',
        color: '#1f1f27',
        borderRadius: '50px',
        padding: '10px 30px 10px 30px',
    },
    alignItem: {
        display: 'flex',
        flexDirection: 'colume',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        marginBottom: '65px',

    }

}