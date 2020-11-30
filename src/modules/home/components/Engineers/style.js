import { colors } from '../../../../constants/color';

export const style = {
    heading: {
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color:colors.infoColor,
    },
    para1: {
        marginTop: '50px',
        color: colors.primaryColor,
        fontSize: '18px',
        fontWieght: '400',
        lineHieght: '30px',
        marginBottom: '30px',
        textAlign:'left'

    },
    para2: {
        color: colors.primaryColor,
        fontSize: '18px',
        fontWieght: '400',
        lineHieght: '30px',
        marginBottom: '30px',
        textAlign:'left',

    },
    top: {
        marginTop: '50px',
        paddingLeft: '60px',
        paddingRight: '60px',
    },
    textdec: {
        textDecoration: 'none',
    },
    button: {
        backgroundColor: colors.secondryColor,
        fontWeight: '400',
        lineHieght: '10px',
        borderRadius: '50px',
        padding: '10px 30px 10px 30px',
        marginTop: '130px',
        marginLeft: '40px',
        outline: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },


}