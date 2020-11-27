import { colors } from "../../../../commonComponents/constants/color";

export const style = {
    main: {
        paddingLeft: "30px",
        paddingRight: '30px',
    },
    heading: {
        textAlign: 'left',
        marginTop: '100px',
        marginBottom: '50px',
        color: colors.infoColor,
        fontSize: '45px',
        fontWeight: '750',
    },
    img2: {
        maxWidth: '100%',
        width: '570px',
        height: 'auto',
        marginTop: '50px',
        padding: '0px',

    },
    list: {
        color: colors.primaryColor,
        lineHeight: '30px',
        fontSize: '18px',
        fontWeight: '400',
    },
    alignitem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
    },
    para: {
        color: colors.primaryColor,
        lineHeight: '30px',
        fontSize: '18px',
        fontWeight: '400',
        marginBottom: '30px',
    },
    button: {
        backgroundColor: colors.secondryColor,
        color: '#fff',
        borderRadius: '50px',
        padding: '10px 30px 10px 30px',
        outline: 'none',
        fontSize: '14px',
        lineHeight: '17px',
        marginTop: '20px',
    },
}