import { colors } from "../../../../commonComponents/constants/color";
export const style = {
    main:{
        paddingLeft:'20px',
        paddingRight:'20px',
    },
    heading: {
        fontSize: '60px',
        textAlign: 'left',
        fontWeight: '500',
        marginTop: '80px',
        marginBottom: '50px', 
        color:colors.infoColor,
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
      
        marginBottom: '30px',
    },
    img2: {
        maxWidth: '100%',
        height: 'auto',
        
        marginTop: '30px',
    },
    alignitem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    para: {
        color: colors.primaryColor,
        lineHeight: '30px',
        fontSize: '18px',
        fontWeight: '400',
        marginBottom: '30px',
    },
}