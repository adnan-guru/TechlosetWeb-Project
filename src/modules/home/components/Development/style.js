import img2 from '../../../../assets/bgimage2.jpg';
import {colors} from '../../../../commonComponents/constants/color'
export const style = {
   
    main:{
        position:'fixed',
    },
   
   
    para: {
        fontSize: '19px',
        color: colors.primaryColor,
        letterSpacing: '2px',
        fontWeight: '300',
        lineHeight: '30px',
        textAlign: 'center',

    },
    heading: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '4.5vw',
        marginTop: '80px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    alignment: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: colors.primarycolor,
        backgroundColor: '#2176ff',
        fontWeight: '600',
        borderRadius: '50px',
        padding: '10px 30px 10px 20px',
        letterSpacing: '3px',
        marginTop: '10px',
        outline: 'none',
        marginBottom: '200px',
    },
    atag: {
        textDecoration: 'none',
    },
    contactbutton: {
        marginLeft: '100px'
    },
    bgimage: {
        
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: '800px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${img2})`,
    }


}